const path = require('path');
const slugify = require('slugify');
const readingTime = require('reading-time');

const postTemplate = path.resolve(`./src/templates/post-template.jsx`);
const categoryTemplate = path.resolve(`./src/templates/category-template.jsx`);
const tafsiriPageTemplate = path.resolve(`./src/pages/tafsiri-ya-quran.jsx`);

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type MdxFrontmatter {
      includeInList: Boolean
    }
  `);
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query GetAllMdx {
      allMdx {
        nodes {
          id
          frontmatter {
            title
            category
            includeInList
          }
          internal {
            contentFilePath
          }
        }
      }
      categories: allMdx {
        distinct(field: frontmatter___category)
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const posts = result.data.allMdx.nodes;
  const categories = result.data.categories.distinct;

  posts.forEach(node => {
    if (!node.frontmatter.title || typeof node.frontmatter.title !== 'string') {
      reporter.warn(`Skipping node with missing or invalid title: ${JSON.stringify(node)}`);
      return;
    }

    const slug = slugify(node.frontmatter.title, { lower: true });
    createPage({
      path: `/${node.frontmatter.category.toLowerCase()}/${slug}`,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id, slug, title: node.frontmatter.title },
    });
  });

  categories.forEach(category => {
    createPage({
      path: `/${category.toLowerCase()}`,
      component: categoryTemplate,
      context: {
        category,
      },
    });
  });

  // Ensure this path is correct
  createPage({
    path: `/tafsiri-ya-quran/`,
    component: tafsiriPageTemplate,
  });
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    createNodeField({
      node,
      name: `timeToRead`,
      value: readingTime(node.body),
    });
  }
};

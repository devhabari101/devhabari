const path = require('path');
const slugify = require('slugify');
const postTemplate = path.resolve(`./src/templates/post-template.jsx`);
const categoryTemplate = path.resolve(`./src/templates/category-template.jsx`);
const readingTime = require(`reading-time`);

exports.createPages = async ({ graphql, actions }) => {
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

  // Create individual pages for posts
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

  // Create category pages
  categories.forEach(category => {
    createPage({
      path: `/${category.toLowerCase()}`,
      component: categoryTemplate,
      context: {
        category,
      },
    });
  });

  // Create a page for the list of MDX files
  createPage({
    path: `/mdx-list/`,
    component: postTemplate,
    context: {
      listPage: true,
    },
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

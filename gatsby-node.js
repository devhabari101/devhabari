const path = require('path');
const slugify = require('slugify');
const postTemplate = path.resolve(`./src/templates/post-template.jsx`);
const categoryTemplate = path.resolve(`./src/templates/category-template.jsx`);
const readingTime = require('reading-time');

// Create pages dynamically
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
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  const getCategories = await graphql(`
    query GetDistinctCategories {
      categories: allMdx {
        distinct(field: frontmatter___category)
      }
    }
  `);

  const posts = result.data.allMdx.nodes;
  const categories = getCategories.data.categories.distinct;

  posts.forEach(node => {
    const slug = node.frontmatter.slug
      ? node.frontmatter.slug
      : `/${node.frontmatter.category.toLowerCase()}/${slugify(node.frontmatter.title, { lower: true })}`;

    console.log(`Creating post page: ${slug}`);

    createPage({
      path: slug,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id, slug, title: node.frontmatter.title, category: node.frontmatter.category },
    });
  });

  categories.forEach(category => {
    console.log(`Creating category page: /${category.toLowerCase()}`);
    createPage({
      path: `/${category.toLowerCase()}`,
      component: categoryTemplate,
      context: { category },
    });
  });
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    createNodeField({
      node,
      name: 'timeToRead',
      value: readingTime(node.body),
    });
  }
};

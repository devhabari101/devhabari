const path = require('path');
const slugify = require('slugify');
const postTemplate = path.resolve(`./src/templates/post-template.jsx`);
const categoryTemplate = path.resolve(`./src/templates/category-template.jsx`);
const readingTime = require('reading-time');

// Create pages dynamically
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
            slug
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
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  const posts = result.data.allMdx.nodes;
  const categories = result.data.categories.distinct;

  posts.forEach(node => {
    const categorySlug = slugify(node.frontmatter.category, { lower: true });
    const slug = node.frontmatter.slug
      ? node.frontmatter.slug.toLowerCase() // Ensure slug from frontmatter is lowercase
      : `/${categorySlug}/${slugify(node.frontmatter.title, { lower: true })}`;

    console.log(`Creating post page: Title: ${node.frontmatter.title}, Category: ${node.frontmatter.category}, Generated Slug: ${slug}, FilePath: ${node.internal.contentFilePath}`);

    createPage({
      path: slug,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
        slug,
        title: node.frontmatter.title,
        category: node.frontmatter.category,
      },
    });
  });

  categories.forEach(category => {
    const categorySlug = slugify(category, { lower: true });
    console.log(`Creating category page: /${categorySlug}`);

    createPage({
      path: `/${categorySlug}`,
      component: categoryTemplate,
      context: {
        category,
      },
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

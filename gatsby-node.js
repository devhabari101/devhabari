exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query GetAllMdx {
      allMdx(filter: { frontmatter: { excludeFromIndex: { ne: true } } }) {
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

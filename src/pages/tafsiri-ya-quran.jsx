// ./src/pages/tafsiri-ya-quran.jsx

import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

// Log to confirm that the component is being rendered
console.log("Rendering TafsiriPage component");

const TafsiriPage = ({ data }) => {
  // Log the data to inspect its structure
  console.log("Page data:", data);

  // Extract allMdx from the data
  const { allMdx } = data;

  if (!allMdx || !allMdx.nodes) {
    return <div>Error: No data available</div>;
  }

  return (
    <div>
      <h1>Content List</h1>
      <ul>
        {allMdx.nodes.map(node => (
          <li key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <MDXRenderer>{node.body}</MDXRenderer>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: { includeInList: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        body
      }
    }
  }
`;

export default TafsiriPage;

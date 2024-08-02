import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const TafsiriPage = ({ data }) => {
  const { allMdx } = data;

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

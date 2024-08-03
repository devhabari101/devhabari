import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/SEO';
import RecentPosts from '../components/RecentPosts';
import Featured from '../components/featured/Featured';
import Notification from '../components/Notification';

const IndexPage = ({ data }) => {
  const { allMdx: { nodes: posts } } = data;
  const { site: { siteMetadata: metadata } } = data;

  // Log to check filtered posts
  console.log('Filtered posts:', posts);

  return (
    <Layout>
      <Seo
        title={`${metadata.title} | Tuna Hamasisha Elimu Ya Bure Kwa Wote`}
        description={metadata.description.substr(0, 160)}
      />
      <Featured />
      <Notification />
      <RecentPosts posts={posts} />
    </Layout>
  );
}

export const query = graphql`
  query Home {
    allMdx(
      limit: 3,
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { excludeFromIndex: { ne: true } } }
    ) {
      nodes {
        excerpt
        frontmatter {
          title
          category
          date(formatString: "MMMM Do, YYYY")
          excludeFromIndex
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
    site {
      siteMetadata {
        title
        description
        image
      }
    }
  }
`;

export default IndexPage;

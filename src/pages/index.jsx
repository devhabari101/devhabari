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

  // Filter posts based on the excludeFromIndex field
  const filteredPosts = posts.filter(post => !post.frontmatter.excludeFromIndex);

  // Log to check filtered posts
  console.log('Filtered posts:', filteredPosts);

  return (
    <Layout>
      <Seo
        title={`${metadata.title} | Tuna Hamasisha Elimu Ya Bure Kwa Wote`}
        description={metadata.description.substr(0, 160)}
      />
      <Featured />
      <Notification />
      <RecentPosts posts={filteredPosts} />
    </Layout>
  );
}

export const query = graphql`
  query Home {
    allMdx(
      sort: { frontmatter: { date: DESC } }
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
        fields {
          timeToRead {
            words
          }
        }
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

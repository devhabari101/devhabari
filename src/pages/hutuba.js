// src/pages/hutuba.js
import React from 'react';
import Layout from '../components/Layout';
import Posts from '../components/Posts';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Seo from '../components/SEO';
import YouTubeMusicEmbed from '../components/YouTubeMusicEmbed';

const HutubaPage = props => {
  const {
    data: {
      categories: { nodes: posts },
    },
  } = props;
  const {
    pageContext: { category = 'Hutuba' },
  } = props;

  return (
    <>
      <Layout>
        <CategoryPostsStyles>
          <Posts posts={posts} title={`${category}`} />
        </CategoryPostsStyles>
        <YouTubeMusicEmbed playlistId="PL6KDSA-xqq5GS9rpFBnDuW3QWeQ8q6zzA" />
      </Layout>
      <Seo
        title={`${category} | DevHabari`}
        description={`Jukwaa lakujifunza ${category} bure.`}
      />
    </>
  );
};

export const query = graphql`
  query GetHutubaPosts {
    categories: allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { category: { eq: "hutuba" } } }
    ) {
      nodes {
        fields {
          timeToRead {
            words
          }
        }
        excerpt(pruneLength: 60)
        frontmatter {
          title
          category
          date(formatString: "MMMM, Do YYYY")
          image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
            size
          }
        }
      }
    }
  }
`;

const CategoryPostsStyles = styled.section`
  margin: 4rem 0;
`;

export default HutubaPage;

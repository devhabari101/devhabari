import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { GoCalendar } from 'react-icons/go';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { getColor } from '../components/utils/heroCategories';
import '../components/featured/features-styles.scss';
import Seo from '../components/SEO';

const PostTemplate = ({ data, children, pageContext }) => {
  const isListPage = pageContext.listPage;

  if (isListPage) {
    const { allMdx } = data;
    return (
      <Layout>
        <Seo title="MDX List" description="A list of MDX files" />
        <Wrapper>
          <section className="container">
            <div className="row">
              <div className="col-2 display-none-on-sm-screen"></div>
              <div className="col-xl-7 col-12">
                <h1>MDX List</h1>
                <ul>
                  {allMdx.nodes.map(node => (
                    <li key={node.id}>
                      <h2>{node.frontmatter.title}</h2>
                      <MDXRenderer>{node.body}</MDXRenderer>
                    </li>
                  ))}
                </ul>
              </div>
              <Sidebar />
            </div>
          </section>
        </Wrapper>
      </Layout>
    );
  }

  const {
    mdx: {
      frontmatter: { title, category, image, date, embeddedImages, imageAttribution },
      body,
      excerpt,
      fields: { timeToRead: { words } },
    },
  } = data;

  return (
    <Layout>
      <Seo title={title} description={excerpt} />
      <Wrapper>
        <section className="container">
          <div className="row">
            <div className="col-2 display-none-on-sm-screen"></div>
            <div className="col-xl-7 col-12">
              <article className="article-content">
                <h2>{title}</h2>
                <GatsbyImage
                  image={getImage(image)}
                  alt={title}
                  className="main-img"
                />
                <div className="post-info">
                  <ul className="card-meta list-inline">
                    <li className="list-inline-item">
                      <AiOutlineClockCircle />
                      Dakika {Math.ceil(words / 275)} Za Kusoma
                    </li>
                    <li className="list-inline-item">
                      <GoCalendar /> {date}
                    </li>
                    <li className="list-inline-item">
                      {imageAttribution ? (
                        <div className="image-attribution">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={imageAttribution}
                          >
                            Image Source
                          </a>
                        </div>
                      ) : (
                        ''
                      )}
                    </li>
                    <li className="list-inline-item">
                      <ul className="card-meta-tag list-inline">
                        <li className="list-inline-item">
                          <Link
                            to={`/${category.toLowerCase()}`}
                            className="category-link"
                            style={{
                              color: getColor(category),
                              backgroundColor: getColor(category),
                            }}
                          >
                            <div className="category-text-color">
                              {category}
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="article-body">
                  <MDXProvider>{children}</MDXProvider>
                </div>
              </article>
            </div>
            <Sidebar />
          </div>
        </section>
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query ($title: String, $listPage: Boolean = false) {
    mdx(frontmatter: { title: { eq: $title } }) @skip(if: $listPage) {
      frontmatter {
        title
        imageAttribution
        category
        date(formatString: "MMMM Do, YYYY")
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
      body
      excerpt(pruneLength: 60)
      fields {
        timeToRead {
          words
        }
      }
    }
    allMdx(filter: { frontmatter: { includeInList: { eq: true } } }, sort: { fields: [frontmatter___date], order: DESC }) @include(if: $listPage) {
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

const Wrapper = styled.section`
  /* Your existing styles */
`;

export default PostTemplate;

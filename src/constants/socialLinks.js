import React from 'react'
import {
  FaRedditSquare,
  FaMastodon,
  FaTwitterSquare,
  FaGithubSquare,
} from 'react-icons/fa'
import styled from 'styled-components'

const SocialLinks = () => {
  return (
    <SocialLinksStyles>
      <ul className="nav-icons">
        <li>
          <a
            href="https://github.com/devhabari101/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to Github"
          >
            <FaGithubSquare className="social-icon github-icon"></FaGithubSquare>
          </a>
        </li>
       
         <li>
          <a
            href="https://mastodon.social/@qwembe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to Twitter"
          >
            <FaMastodon className="social-icon twitter-icon"></FaMastodon>
          </a>
        </li>      
        <li>
          <a
            href="https://mastodon.social/@qwembe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to Twitter"
          >
            <FaTwitterSquare className="social-icon reddit-icon"></FaTwitterSquare>
          </a>
        </li>
      </ul>
    </SocialLinksStyles>
  )
}

const SocialLinksStyles = styled.div`
  .nav-links {
    display: none;
  }
  .nav-icons {
    display: none;
  }

  .github-icon {
    color: #4078c0;
  }
  .twitter-icon {
    color: #00acee;
  }
  .reddit-icon {
    color: orangered;
  }
  
    .nav-center {
      display: grid;
      color: var(--primary-8);
      grid-template-columns: auto 1fr auto;
      column-gap: 2rem;
      align-items: center;
    }
    .nav-links {
      display: flex;
      align-items: center;
    }
    .page-link {
      margin-right: 1rem;
    }
    .page-link {
      color: var(--primary-8);
      font-weight: 500;
      letter-spacing: var(--spacing);
      font-size: 1rem;
      transition: var(--transition);
      font-family: var(--ff-secondary);
      cursor: pointer;
      padding: 0.25rem 0.5rem;
      border-radius: var(--radius);
    }
    .page-link:hover {
      background: var(--primary-5);
      color: var(--primary-10);
    }
    .nav-icons {
      display: flex;
      justify-content: center;
    }
    .nav-icons .social-icon {
      font-size: 1.7rem;
      transition: var(--transition);
      margin: 0 0.5rem;
    }
    .nav-icons .social-icon:hover {
      color: var(--primary-5);
      transform: translateY(-5px);
    }
  }
`

export default SocialLinks

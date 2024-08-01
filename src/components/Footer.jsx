import React from 'react'
import SocialLinks from '../constants/socialLinks'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faMastodon, } from '@fortawesome/free-brands-svg-icons'
import logo from '../assets/logo.png'
import { Link } from 'gatsby'
const Footer = () => {
  return (
    <FooterStyles>
      <div className="footer">
        
        

        <SocialLinks styleClass="footer-icons" />
        <div className="footer-links">
        <div>
            
         
               
              
          </div>
          
       
        <div>
        <p className="footer-copyright">
          &copy;2022-{new Date().getFullYear()} MASJID TAQWA (ILALA-BUNGONI),haki zote zimehifadhiwa.
        </p>
      </div>
      </div>
        </div>
    </FooterStyles>
  )
}

export const FooterStyles = styled.footer`
  /*
===============
Footer
===============
*/
  .footer {
    /* height: 7rem; */
    text-align: center;
    background: var(--black);
    display: grid;
    place-items: center;
    padding: 1rem 0;
    display: block;
  }
  .footer-icons {
    display: flex;
    justify-content: center;
    line-height: 1;
    margin-bottom: 1.5rem;
  }
  .footer-icons a {
    font-size: 1.5rem;
    margin: 0 0.5rem;
    transition: var(--transition);
  }
  .footer-icons li {
    transition: var(--transition);
  }
  .footer-icons li:hover {
    transform: translateY(-10%);
  }
  .footer p {
    margin-bottom: 0;
    color: var(--white);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }

  .footer-logo {
    margin: 1rem 0 1.5rem 0;
    width: 3rem;
    height: 3rem;
  }

  .footer ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.footer li {
  float: left;
}

.footer li a {
  display: inline-block;
  color: var(--primary-8);
  justify-content: center;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
  
  .footer-copyright {
    margin: 0.8rem 0 1.2rem 0;
  }

  .footer-links {
    margin: 1rem 0 0.7rem 0;
    line-height: 1.5rem;
  }

  .footer-link {
    color: var(--white);
    margin-bottom: 0.5rem;
  }

  @media screen and (max-width: 767px) {
    .footer-links {
      line-height: 2rem;
    }

    .footer {
      padding: 1rem;
    }
  }
`

export default Footer

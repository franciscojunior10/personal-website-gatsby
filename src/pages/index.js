import React from 'react';

import {
  Link,
  StaticQuery,
  graphql,
} from 'gatsby';

import Img from 'gatsby-image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faInstagram,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO
      description="full-stack developer, developing apps"
      keywords="ReactJS, React Native, Node, Gatsby, Front-end, Back-end, API"
    />
    <figure className="perfil image is-128x128">
      <StaticQuery
        query={graphql`
        query {
          file(relativePath: { eq: "perfil.jpg" }) {
            childImageSharp {
              fixed(width: 128, height: 128) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
        render={(data) => (
          <Img
            fixed={data.file.childImageSharp.fixed}
            imgStyle={{ borderRadius: '100%' }}
            alt="Francisco Júnior"
          />
        )}
      />
    </figure>

    <div className="has-text-centered">

      <h1 className="title has-text-light">Francisco Júnior</h1>
      <h2 className="subtitle has-text-warning">Full Stack Developer</h2>

      <a href="https://github.com/franciscojunior10" aria-label="github" target="_blank">
        <span className="icon is-large fa-2x">
          <FontAwesomeIcon icon={faGithub} />
        </span>
      </a>

      <a href="https://www.linkedin.com/in/franciscojunior10/" aria-label="linkedin" target="_blank">
        <span className="icon is-large fa-2x">
          <FontAwesomeIcon icon={faLinkedin} />
        </span>
      </a>
    </div>

    <section className="section content is-size-4-desktop is-size-5-touch">
      <h4 className="title has-text-light">Hello, I am Francisco das Chagas dos Anjos Carvalho Júnior</h4>
      <p>
        Graduating in Information Systems at
        the Federal University of Piauí - UFPI.
        Developer ReactJS, Node.js and React Native.
        I'm passionate about JavaScript and
        the whole ecosystem of this technology
      </p>
      <p>
        I like to work in a team and I am a very communicative
        guy, who devours new technologies
        and likes to play with JavaScript framework.
      </p>
      <p>
        Check out my
        {' '}
        <Link to="/projects">projects</Link>
        {' '}
        or
        {' '}
        <Link to="/skills">skills</Link>
        .
      </p>
    </section>
  </Layout>
);

export default IndexPage;

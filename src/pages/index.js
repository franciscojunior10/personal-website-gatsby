import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO
      description="full-stack developer, developing apps"
      keywords="ReactJS, React Native, Node, Gatsby, Front-end, Back-end, API"
    />
    <h1 className="title has-text-centered">Francisco Júnior</h1>
    <h2 className="subtitle has-text-centered">Full Stack Developer</h2>
    <section className="section content is-size-4-desktop is-size-5-touch">
      <h4 className="title">Hello, I am Francisco das Chagas dos Anjos Carvalho Júnior</h4>
      <p>
        Graduating in Information Systems at
        the Federal University of Piauí - UFPI.
        Interest in developing web, mobile and backend applications.
      </p>
      <p>
        I develop my projects with JavaScript using
        ReactJS, Node.js and React Native.
      </p>
      <p>
        Check out my
        {' '}
        <Link to="/projects">projects</Link>
        .
      </p>
    </section>
  </Layout>
);

export default IndexPage;

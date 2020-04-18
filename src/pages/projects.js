import React from 'react';

import Layout from '../components/layout';

import SEO from '../components/SEO';

const Projects = () => (
  <Layout>
    <SEO
      title="Projects"
      description="full-stack developer, developing apps"
      keywords="ReactJS, React Native, Node, Gatsby, Front-end, Back-end, API"
    />

    <section className="section is-size-4-desktop is-size-5-touch">
      <h1 className="title has-text-centered">Projects</h1>
      <hr />
      <p className="has-text-centered">
        {'Some of my projects, see more on my '}
        <a href="https://github.com/franciscojunior10">Github</a>
        .
      </p>
    </section>
  </Layout>
);

export default Projects;

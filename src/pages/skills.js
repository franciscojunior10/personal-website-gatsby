import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Title from 'components/Title';

import Helmet from 'react-helmet';

const Skills = () => (
  <Layout>
    <SEO
      title="Skills"
      description="full-stack developer, developing apps"
      keywords="ReactJS, React Native, Node, Gatsby, Front-end, Back-end, API"
    />
    <Helmet>
      <script async src="https://cdn1.stackshare.io/javascripts/client-code.js" charset="utf-8" />
    </Helmet>
    <section className="section is-size-4-desktop is-size-5-touch">
      <Title>
        Skills
      </Title>
      <div className="has-text-centered">
        <p className="content">
          I have experience with many modern tools,
          select them for my projects depending on the usage.
        </p>

        <p clasName="content">
          Here is my stack on StackShare:
        </p>

        <div className="columns is-centered">
          <div className="column is-half">

            <a
              frameBorder="0"
              data-theme="dark"
              data-layers="1,2,3,4"
              data-stack-embed="true"
              href="https://embed.stackshare.io/stacks/embed/2464b1f359bad5196a85feb0f47ccc"
            >
              StackShare
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Skills;

import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Helmet from 'react-helmet';

const Stack = () => (
  <Layout>
    <SEO
      title="Stack"
      description="full-stack developer, developing apps"
      keywords="ReactJS, React Native, Node, Gatsby, Front-end, Back-end, API"
    />
    <Helmet>
      <script
        async
        src="https://cdn1.stackshare.io/javascripts/client-code.js"
        charset="utf-8"
      />
    </Helmet>
    <section className="section is-size-4-desktop is-size-5-touch">
      <h1 className="title has-text-centered">Stack</h1>
      <hr />
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
              data-theme="light"
              data-layers="1,2,3,4"
              data-stack-embed="true"
              href="https://embed.stackshare.io/stacks/embed/034f37a700e6ee4db717af432dc8f1"
            >
              StackShare
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Stack;

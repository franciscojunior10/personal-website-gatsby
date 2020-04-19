import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="section">
      <h1 className="title hast-text-centered">404: Not found</h1>
      <hr />
      <p className="has-text-centered">
        You Just hit a rouye that not exist.
      </p>
    </section>
  </Layout>
);

export default NotFoundPage;

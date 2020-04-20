import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Title from 'components/Title';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="section">
      <Title>
        404: Not found
      </Title>
      <p className="has-text-centered">
        You Just hit a rouye that not exist.
      </p>
    </section>
  </Layout>
);

export default NotFoundPage;

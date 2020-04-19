import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';

import Img from 'gatsby-image';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Card from 'components/Card';

export const queryImage = graphql`
query {
  project1: file(relativePath: { eq: "sem11.png" }) {
    childImageSharp {
      fixed(width: 96, height: 96) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  project2: file(relativePath: { eq: "sem10.png" }) {
    childImageSharp {
      fixed(width: 96, height: 96) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  project3: file(relativePath: { eq: "sem9.png" }) {
    childImageSharp {
      fixed(width: 96, height: 96) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`;

const Projects = ({ data }) => (
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

      <div className="columns is-centered">
        <div className="column is-half">
          <Card
            title="Semana OmniStack 11.0"
            subtitle="Projeto resultado da Semana Omnistack #11"
            link="https://github.com/franciscojunior10/semana-omnistack-11.0"
            tags={['nodejs', 'reactjs', 'reactjs', 'react-native', 'expo']}
            image={<Img fixed={data.project1.childImageSharp.fixed} alt="Semana OmniStack 11.0" />}
          />

          <Card
            title="Semana OmniStack 10.0"
            subtitle="Projeto resultado da Semana Omnistack #10"
            link="https://github.com/franciscojunior10/semana-omnistack-10.0"
            tags={['nodejs', 'reactjs', 'reactjs', 'react-native', 'expo']}
            image={<Img fixed={data.project2.childImageSharp.fixed} alt="Semana OmniStack 10.0" />}
          />

          <Card
            title="Semana OmniStack 9.0"
            subtitle="Projeto resultado da Semana Omnistack #9"
            link="https://github.com/franciscojunior10/semana-omnistack-9.0"
            tags={['nodejs', 'reactjs', 'reactjs', 'react-native', 'expo']}
            image={<Img fixed={data.project3.childImageSharp.fixed} alt="Semana OmniStack 9.0" />}
          />

        </div>
      </div>

    </section>
  </Layout>
);

Projects.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Projects;

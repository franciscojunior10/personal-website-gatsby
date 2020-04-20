import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';

import Img from 'gatsby-image';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Card from 'components/Card';
import Title from 'components/Title';

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
  codenation: file(relativePath: { eq: "code.png" }) {
    childImageSharp {
      fixed(width: 96, height: 96) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  api: file(relativePath: { eq: "api.png" }) {
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
      <Title>
        Projects
      </Title>
      <p className="has-text-centered">
        {'Access my repositories at the '}
        <a href="https://github.com/franciscojunior10">Github</a>
        .
      </p>

      <div className="columns is-centered">
        <div className="column is-half">

          <Card
            title="Api Training"
            subtitle="Practicing Api Rest"
            link="https://github.com/franciscojunior10/api-training"
            tags={['nodejs', 'api-rest']}
            image={<Img fixed={data.api.childImageSharp.fixed} alt="Semana OmniStack 10.0" />}
          />

          <Card
            title="Site estático: IMDB"
            subtitle="Challenge 01 codenation"
            link="https://github.com/franciscojunior10/challenge-imdb"
            tags={['html5', 'css', 'codenation']}
            image={<Img fixed={data.codenation.childImageSharp.fixed} alt="Semana OmniStack 9.0" />}
          />

          <Card
            title="Mobile First: Instagram"
            subtitle="Challenge 02 codenation"
            link="https://github.com/franciscojunior10/challenge-instagram-mobile-first"
            tags={['html5', 'css', 'codenation']}
            image={<Img fixed={data.codenation.childImageSharp.fixed} alt="Semana OmniStack 9.0" />}
          />

          <Card
            title="Blog Aula"
            subtitle="Example of Blog created in module 1 of AceleraDev React promoted by Codenation"
            link="https://github.com/franciscojunior10/blog-aula"
            tags={['html5', 'css', 'codenation']}
            image={<Img fixed={data.codenation.childImageSharp.fixed} alt="Semana OmniStack 9.0" />}
          />

          <Card
            title="Bem Css Aula"
            subtitle=" Example of Bem Css built in module 2 of AcelaraDev React promoted by Codenation"
            link="https://github.com/franciscojunior10/bem-css-aula"
            tags={['html5', 'css', 'codenation']}
            image={<Img fixed={data.codenation.childImageSharp.fixed} alt="Semana OmniStack 9.0" />}
          />

          <Card
            title="Week OmniStack 11.0"
            subtitle="Project result of the Week Omnistack #11"
            link="https://github.com/franciscojunior10/semana-omnistack-11.0"
            tags={['nodejs', 'reactjs', 'reactjs', 'react-native', 'expo']}
            image={<Img fixed={data.project1.childImageSharp.fixed} alt="Semana OmniStack 11.0" />}
          />

          <Card
            title="Week OmniStack 10.0"
            subtitle="Project result of the Week Omnistack #10"
            link="https://github.com/franciscojunior10/semana-omnistack-10.0"
            tags={['nodejs', 'reactjs', 'reactjs', 'react-native', 'expo']}
            image={<Img fixed={data.project2.childImageSharp.fixed} alt="Semana OmniStack 10.0" />}
          />

          <Card
            title="Week OmniStack 9.0"
            subtitle="Project result of the Week Omnistack #9"
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

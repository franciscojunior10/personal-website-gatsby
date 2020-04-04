import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Francisco Júnior</h1>
    <h2>Full Stack Developer</h2>
    <section>
      <h4>Hello, I am Francisco das Chagas dos Anjos Carvalho Júnior</h4>
      <p>Graduating in Information Systems at the Federal University of Piauí - UFPI. Interest in developing web, mobile and backend applications.</p>
      <p>I develop my projects with JavaScript using ReactJS, Node.js and React Native.</p>
    </section>
    <p>
      Check out my
      {` `}
      <Link to="/projects">projects</Link>  
      .
    </p>
    
  </Layout>
)

export default IndexPage

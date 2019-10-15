import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Contact />
  </Layout>
)

export default IndexPage

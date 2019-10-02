import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import MissionSection from "../components/MissionSection"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <MissionSection />
    <Contact />
  </Layout>
)

export default IndexPage

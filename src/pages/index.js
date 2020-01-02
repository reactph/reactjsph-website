import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import TeamSection from "../components/team"
import Contact from "../components/contact"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <TeamSection />
    <Contact />
  </Layout>
)

export default IndexPage

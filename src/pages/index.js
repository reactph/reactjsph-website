import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TeamSection from "../components/team"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TeamSection />
  </Layout>
)

export default IndexPage

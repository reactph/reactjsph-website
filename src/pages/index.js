import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MissionSection from "../components/MissionSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MissionSection />
  </Layout>
)

export default IndexPage

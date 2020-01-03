import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import MissionSection from "../components/MissionSection"
import VisionSection from "../components/VisionSection"
import TeamSection from "../components/team"
import Contact from "../components/contact"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <MissionSection />
    <VisionSection />
    <TeamSection />
    <Contact />
  </Layout>
)

export default IndexPage

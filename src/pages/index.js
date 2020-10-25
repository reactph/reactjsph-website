import React from "react"
import { ErrorBoundary } from "react-error-boundary"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import MissionSection from "../components/missionSection"
import MeetupSection from "../components/meetupSection"
import VisionSection from "../components/visionSection"
import TeamSection from "../components/team"
import Contact from "../components/contact"
import FbTokenRequiredBoundary from "../components/fbTokenRequiredBoundary"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <MissionSection />
    <ErrorBoundary FallbackComponent={FbTokenRequiredBoundary}>
      <MeetupSection />
    </ErrorBoundary>
    <VisionSection />
    <TeamSection />
    <Contact />
  </Layout>
)

export default IndexPage

import React from "react"
import { graphql } from "gatsby"
import { Box, Text } from "rebass"

import Container from "../components/container"
import Layout from "../components/layout"
import ProjectCard from "../components/projectCard"
import SEO from "../components/seo"

const ProjectsPage = ({ data }) => (
  <Layout>
    <SEO title="Community Projects" />
    <Container
      display="flex"
      flexDirection="column"
      alignItems="center"
      pt={[0, 3]}
    >
      <Box as="header" mb={[2, 3]} textAlign="center">
        <Text
          as="h1"
          display="inline-flex"
          alignItems="center"
          mb={[1, 2]}
          color="white"
          fontSize={[3, 4]}
          sx={{
            textTransform: "uppercase",

            "@media screen and (max-width: 32em)": {
              fontSize: "2",
            },
          }}
        >
          {"<"}
          <Box
            width="min-content"
            mx={[1, 2]}
            color="lightBlue"
            textAlign="center"
            lineHeight="1"
            fontSize={[4, 5]}
            fontWeight="hero"
            sx={{
              "@media screen and (max-width: 32em)": {
                fontSize: "3",
              },

              "&:after": {
                display: "block",
                width: "90%",
                height: ".3rem",
                marginTop: "0.75rem",
                marginRight: "auto",
                marginLeft: "auto",
                bg: "white",
                content: "''",
              },
            }}
          >
            Community Projects
          </Box>
          {"/>"}
        </Text>
        <Text color="white" fontSize={[1, 2]}>
          React projects built by members of the community
        </Text>
      </Box>
      <Box as="ul" width="100%">
        {data.allProjectsJson.edges.map(project => (
          <Box as="li">
            <ProjectCard project={project.node} />
          </Box>
        ))}
      </Box>
    </Container>
  </Layout>
)

export const query = graphql`
  query ProjectsJsonQuery {
    allProjectsJson {
      edges {
        node {
          name
          author
          description
          homepage
          tags
        }
      }
    }
  }
`

export default ProjectsPage

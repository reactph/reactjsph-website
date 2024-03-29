import React from "react"
import { graphql } from "gatsby"
import { Box, Text } from "rebass"

import Container from "../components/container"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DevBio from "../components/devBio"

const DevBoardPage = ({ data }) => (
  <Layout>
    <SEO title="Dev Board" />
    <Container pt={[0, 3]}>
      <Text
        as="h1"
        mb={[3, 4]}
        color="white"
        fontSize={[3, 4]}
        textAlign="center"
        sx={{
          textTransform: "uppercase",

          "@media screen and (max-width: 32em)": {
            fontSize: "2",
          },
        }}
      >
        {"<"}
        <Text
          as="span"
          display="inline-block"
          mx={[1, 2]}
          color="lightBlue"
          fontSize={[4, 5]}
          fontWeight="hero"
          sx={{
            position: "relative",

            "@media screen and (max-width: 32em)": {
              fontSize: "3",
            },

            "&:after": {
              display: "block",
              position: "absolute",
              width: "100%",
              height: ".3rem",
              bg: "white",
              content: "''",
            },
          }}
        >
          Dev Board
        </Text>
        {"/>"}
      </Text>
      <Box
        as="ul"
        display="grid"
        sx={{
          gridTemplateColumns: ["1fr", "repeat(auto-fill, minmax(15rem, 1fr))"],
          columnGap: "2rem",
          rowGap: "2rem",
        }}
      >
        {data.allDevsJson.edges.map(dev => (
          <Box as="li">
            <DevBio dev={dev.node} />
          </Box>
        ))}
      </Box>
    </Container>
  </Layout>
)

export const query = graphql`
  query DevJsonQuery {
    allDevsJson {
      edges {
        node {
          avatar
          name
          title
          blurb
          skills
          contacts {
            type
            url
          }
        }
      }
    }
  }
`

export default DevBoardPage

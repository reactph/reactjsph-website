import React from "react"
import { Box, Text } from "rebass"

import Container from "../components/container"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DevBio from "../components/devBio"

const devs = [
  {
    avatar:
      "https://res.cloudinary.com/galacemiguel/image/upload/c_fit,dpr_3.0,f_auto,q_auto,w_100/v1576307468/galacemiguel.com/20190103_074056",
    name: "Miguel N. Galace",
    title: "Software Engineer",
    company: "Quipper",
    blurb:
      "I'm Miguel and I obsess over web design. My mission is to elevate the standard of web design and development in the Philippines.",
    skills: ["React", "Rails", "TypeScript"],
    contacts: [
      {
        type: "website",
        url: "https://galacemiguel.com",
      },
      {
        type: "github",
        url: "https://github.com/galacemiguel",
      },
      {
        type: "linkedin",
        url: "https://linkedin.com/in/galacemiguel/",
      },
      {
        type: "email",
        url: "mailto:galacemiguel@gmail.com",
      },
    ],
  },
]

const SecondPage = () => (
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
        {devs.map(dev => (
          <Box as="li">
            <DevBio dev={dev} />
          </Box>
        ))}
      </Box>
    </Container>
  </Layout>
)

export default SecondPage

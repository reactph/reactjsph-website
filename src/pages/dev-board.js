import React from "react"
import { Box, Text } from "rebass"

import Container from "../components/container"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DevBio from "../components/devBio"

import DevsJSON from "../../content/devs.json"

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
const devs = shuffle(DevsJSON);

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

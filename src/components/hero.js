import React from "react"
import { Box, Text, Button, Flex } from "rebass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"

import theme from "../theme"
import Container from "./container"
import HeroCanvas from "./heroCanvas"

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "125vh",
        mt: "-105px",
        mb: 4,
        "&::after": {
          display: "block",
          position: "relative",
          width: "100%",
          height: "101%",
          background: `linear-gradient(transparent 60%, ${
            theme.colors.darkBlue
          })`,
          content: "''",
        },
      }}
    >
      <HeroCanvas />
      <Flex
        alignItems="center"
        css={{
          position: "absolute",
          top: [0, "-5vh"],
          left: 0,
          width: "100%",
          height: "100%",
          lineHeight: 1,
          zIndex: 1,
        }}
      >
        <Container mb="25vh">
          <Box sx={{ textShadow: "main" }}>
            <Text
              display="flex"
              alignItems="center"
              fontSize={[4, 5]}
              color="gold"
              fontWeight="body"
              zIndex={2}
              mb={1}
              sx={{
                ":after": {
                  display: "block",
                  content: "''",
                  width: "35%",
                  height: "2px",
                  backgroundColor: "gold",
                  ml: [2, 3],
                },
              }}
            >
              ★ ★ ★
            </Text>
            <Text
              fontSize={[5, 6, 7]}
              fontWeight="hero"
              color="white"
              zIndex={2}
            >
              WE ARE
            </Text>
            <Text
              fontSize={[4, 5, 6]}
              fontWeight="hero"
              color="lightBlue"
              zIndex={2}
            >
              REACTJS
            </Text>
            <Text
              fontSize={[4, 5, 6]}
              fontWeight="hero"
              color="gold"
              zIndex={2}
            >
              PHILIPPINES
            </Text>
          </Box>
          <Button
            as="a"
            href="https://www.facebook.com/groups/reactjsphilippines"
            target="_blank"
            rel="noopener"
            display="inline-flex"
            alignItems="center"
            sx={{
              marginTop: [2, 3],
              py: [1, 2],
              px: [2, 3],
              fontSize: [1, 2],
            }}
          >
            <Box display="inline-block" mr="2" my="-1rem" fontSize={[2, 3]}>
              <FontAwesomeIcon icon={faFacebookSquare} />
            </Box>
            JOIN THE COMMUNITY
          </Button>
        </Container>
      </Flex>
    </Box>
  )
}

export default Hero

import React from "react"
import { Box, Text, Button, Flex } from "rebass"
import { css } from "@emotion/core"
import { heroImg, heroBrandmark } from "../images"
import Container from "./container"

const heroStyle = css`
    position: relative;
    background-image: url("${heroImg}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 65rem;
`

const Hero = () => (
  <Box css={heroStyle}>
    <Box
      css={theme => ({
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: theme.colors.darkBlue,
        width: "inherit",
        height: "inherit",
        opacity: 0.85,
      })}
    />

    <Flex
      alignItems="center"
      css={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        lineHeight: 0.95,
        zIndex: 1,
      }}
    >
      <Container>
        <Box opacity="1">
          <Text fontSize={6} color="gold" fontWeight="body" zIndex={2}>
            ★★★ ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
          </Text>
          <Text fontSize={7} fontWeight="hero" color="white" zIndex={2}>
            WE ARE
          </Text>
          <Text fontSize={6} fontWeight="hero" color="lightBlue" zIndex={2}>
            REACTJS
          </Text>
          <Text fontSize={6} fontWeight="hero" color="gold" zIndex={2}>
            PHILIPPINES
          </Text>
          <Button
            sx={{
              marginTop: 2,
              py: 1,
              px: 2,
              outline: 0,
              fontSize: 2,
            }}
          >
            JOIN THE COMMUNITY
          </Button>
        </Box>
      </Container>
    </Flex>

    <Box
      css={theme => ({
        backgroundColor: theme.colors.darkBlue,
        width: "100%",
        height: "100%",
        backgroundImage: `url("${heroImg}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        WebkitMaskImage: `url("${heroBrandmark}")`,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "right",
        WebkitMaskPositionY: "-4rem",
      })}
    />
  </Box>
)

export default Hero

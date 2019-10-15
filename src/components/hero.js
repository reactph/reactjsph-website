import React from "react"
import { Box, Text, Button, Flex } from "rebass"
import { css } from "@emotion/core"
import { heroImg, heroBrandmark } from "../images"
import Container from "./container"

const heroStyle = css`
    position: relative;
    background: url("${heroImg}") no-repeat center;
    width: 100%;
    height: 65rem;
`

export const generate3dShadow = (size, color) => {
  let result = []
  for (let i = size; i > 0; i -= 1) {
    result = [...result, `${i}px ${i}px ${color}`]
  }
  return result.join()
}

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
            css={theme => ({
              marginTop: theme.space[2],
              padding: theme.space[1],
              backgroundColor: theme.colors.darkBlue,
              color: theme.colors.white,
              opacity: 1,
              border: `5px solid ${theme.colors.white}`,
              boxShadow: generate3dShadow(5, theme.colors.white),
              borderRadius: 0,
              fontWeight: theme.fontWeights.thin,
              outline: 0,
            })}
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
        background: `url("${heroImg}") no-repeat center`,
        WebkitMaskImage: `url("${heroBrandmark}")`,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "right",
        WebkitMaskPositionY: "-4rem",
      })}
    />
  </Box>
)

export default Hero

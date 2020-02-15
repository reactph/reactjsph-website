import React from "react"
import { Box, Text, Button, Flex } from "rebass"
import { heroImg, heroBrandmark } from "../images"
import Container from "./container"

const Hero = () => (
  <Box
    sx={{
      position: "relative",
      backgroundImage: `url("${heroImg}")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      width: "100%",
      height: "100vh",
      mt: "-105px",
      mb: 4,
    }}
  >
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "darkBlue",
        width: "inherit",
        height: "inherit",
        opacity: 0.85,
      }}
    />

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
      <Container>
        <Box sx={{ textShadow: "main" }}>
          <Text
            fontSize={[4, 5]}
            color="gold"
            fontWeight="body"
            zIndex={2}
            mb={1}
            sx={{
              position: "relative",
              ":after": {
                content: "''",
                position: "absolute",
                left: ["150px", "200px"],
                top: 0,
                bottom: 0,
                margin: "auto 0",
                width: "40%",
                height: "2px",
                backgroundColor: "gold",
              },
            }}
          >
            ★ ★ ★
          </Text>
          <Text fontSize={[5, 6]} fontWeight="hero" color="white" zIndex={2}>
            WE ARE
          </Text>
          <Text
            fontSize={[4, 5]}
            fontWeight="hero"
            color="lightBlue"
            zIndex={2}
          >
            REACTJS
          </Text>
          <Text fontSize={[4, 5]} fontWeight="hero" color="gold" zIndex={2}>
            PHILIPPINES
          </Text>
        </Box>
        <Button
          sx={{
            marginTop: [2, 3],
            py: [1, 2],
            px: [2, 3],
            fontSize: [1, 2],
          }}
        >
          JOIN THE COMMUNITY
        </Button>
      </Container>
    </Flex>

    <Box
      sx={{
        backgroundColor: "darkBlue",
        width: "100%",
        height: "100%",
        backgroundImage: `url("${heroImg}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        WebkitMaskImage: `url("${heroBrandmark}")`,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPositionX: ["40000%", "120%"],
        WebkitMaskPositionY: "center",
        WebkitMaskSize: ["99.9%", "70%"],
      }}
    />
  </Box>
)

export default Hero

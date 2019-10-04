import React from "react"
import { Box, Flex, Text, Image } from "rebass"
import Container from "./container"
import brandmarkLogo from "../images/brandmark.svg"

const TeamSection = () => {
  return (
    <Box backgroundColor="darkBlue" mt={2}>
      <Container>
        <Flex flex={1} justifyContent="center" alignItems="center">
          <Box p={0}>
            <Text
              fontSize={5}
              fontWeight="bold"
              color="lightBlue"
              sx={{
                textTransform: "uppercase",
              }}
            >
              « Core
            </Text>
          </Box>
          <Box p={0}>
            <Image
              sx={{
                width: ["174px", "50%"],
              }}
              src={brandmarkLogo}
              alt="ReactJS Philippines"
            />
          </Box>
          <Box p={0}>
            <Text
              fontSize={5}
              fontWeight="bold"
              color="lightBlue"
              sx={{
                textTransform: "uppercase",
              }}
            >
              Team »
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default TeamSection

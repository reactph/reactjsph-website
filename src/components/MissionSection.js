import React from "react"
import { Box, Text, Image } from "rebass"

import StarDivider from "./StarDivider"
import zigzag from "../images/divider.svg"

const MissionSection = () => {
  return (
    <Box backgroundColor="darkBlue" py={1}>
      <Box maxWidth={792} width="100%" textAlign="center" mx="auto">
        <Box mb={1}>
          <StarDivider />
        </Box>
        <Text
          fontSize={3}
          fontWeight="heading"
          color="gold"
          mb={2}
          sx={{ textTransform: "uppercase" }}
        >
          Mission
        </Text>
        <Text
          fontSize={3}
          fontWeight="heading"
          color="white"
          maxWidth={582}
          width="100%"
          mx="auto"
          mb={2}
          lineHeight="3.157rem"
          sx={{ textTransform: "uppercase" }}
        >
          To be the representative chapter of ReactJS in the Philippines
        </Text>
        <Image src={zigzag} alt="divider" />
      </Box>
    </Box>
  )
}

export default MissionSection

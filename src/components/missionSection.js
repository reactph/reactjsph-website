import React from "react"
import { Box, Text, Image } from "rebass"
import StarDivider from "./starDivider"
import zigzag from "../images/divider.svg"

const MissionSection = () => (
  <Box backgroundColor="darkBlue" py={4}>
    <Box maxWidth={792} width="100%" textAlign="center" mx="auto" px={[2, 3]}>
      <Box mb={2}>
        <StarDivider />
      </Box>
      <Text
        fontSize={[2, 3]}
        fontWeight="heading"
        color="gold"
        mb={3}
        sx={{ textTransform: "uppercase" }}
      >
        Mission
      </Text>
      <Text
        fontSize={[2, 3]}
        fontWeight="heading"
        color="white"
        maxWidth={582}
        width="100%"
        mx="auto"
        mb={3}
        lineHeight="3.157rem"
        sx={{ textTransform: "uppercase" }}
      >
        To be the representative chapter of ReactJS in the Philippines
      </Text>
      <Image src={zigzag} alt="divider" />
    </Box>
  </Box>
)

export default MissionSection

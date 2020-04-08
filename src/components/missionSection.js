import React from "react"
import { Box, Text, Image } from "rebass"
import StarDivider from "./starDivider"
import zigzag from "../images/divider.svg"

const MissionSection = () => (
  <Box backgroundColor="darkBlue" mb={[6, 9]}>
    <Box maxWidth={792} width="100%" textAlign="center" mx="auto" px={[2, 3]}>
      <Box mb={2}>
        <StarDivider />
      </Box>
      <Text
        fontSize={2}
        fontWeight="heading"
        color="gold"
        mb={[2, 3]}
        sx={{ textTransform: "uppercase" }}
      >
        Mission
      </Text>
      <Text
        fontSize={[2, 3]}
        fontWeight="heading"
        color="white"
        width="100%"
        mx="auto"
        mb={[3, 4]}
        lineHeight="1.75"
        letterSpacing="0.05em"
        sx={{ textTransform: "uppercase" }}
      >
        To be the representative chapter of ReactJS in the Philippines
      </Text>
      <Image src={zigzag} alt="divider" />
    </Box>
  </Box>
)

export default MissionSection

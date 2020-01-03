import React from "react"
import { Box, Text, Image } from "rebass"

import StarDivider from "./StarDivider"
import zigzag from "../images/divider.svg"
import communityImg from "../images/community-img.jpg"

const VisionSection = () => {
  return (
    <Box
      backgroundColor="white"
      pt={3}
      mt={40}
      sx={{
        position: "relative",
        ":after": {
          background:
            "linear-gradient(-35deg,#ffffff 46px,transparent 0),linear-gradient(35deg,#ffffff 46px,transparent 0)",
          backgroundRepeat: "repeat-x",
          backgroundSize: "96px 60px",
          content: "''",
          display: "block",
          position: "absolute",
          top: -40,
          width: "100%",
          height: 40,
        },
      }}
    >
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
          Vision
        </Text>
        <Text
          fontSize={3}
          fontWeight="heading"
          color="darkBlue"
          maxWidth={582}
          width="100%"
          mx="auto"
          mb={2}
          lineHeight="3.157rem"
          sx={{ textTransform: "uppercase" }}
        >
          A community of developers, who practice excellence, in service of
          Filipinos
        </Text>
        <Image src={zigzag} alt="divider" mb={3} />
      </Box>
      <Box
        height={330}
        width={998}
        mx="auto"
        sx={{
          backgroundImage: `url(${communityImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          zIndex: 1,
          boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.50)",
        }}
      />
      <Box height={165} backgroundColor="darkBlue" mt={-165} />
    </Box>
  )
}

export default VisionSection

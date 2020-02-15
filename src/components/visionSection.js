import React from "react"
import { Box, Text, Image } from "rebass"
import StarDivider from "./starDivider"
import zigzag from "../images/divider.svg"
import communityImg from "../images/community-img.jpg"

const VisionSection = () => (
  <Box
    backgroundColor="white"
    pt={[3, 4, 6]}
    mt={40}
    mb={[4, 6]}
    sx={{
      position: "relative",
      ":after": {
        background:
          "linear-gradient(-40deg,#ffffff 46px,transparent 0),linear-gradient(40deg,#ffffff 46px,transparent 0)",
        backgroundRepeat: "repeat-x",
        backgroundSize: "80px 60px",
        content: "''",
        display: "block",
        position: "absolute",
        top: -40,
        width: "100%",
        height: 40,
      },
    }}
  >
    <Box maxWidth={792} width="100%" textAlign="center" mx="auto" px={[2, 3]}>
      <Box mb={2}>
        <StarDivider />
      </Box>
      <Text
        fontSize={[2, 3]}
        fontWeight="heading"
        color="gold"
        mb={[2, 3]}
        sx={{ textTransform: "uppercase" }}
      >
        Vision
      </Text>
      <Text
        fontSize={[2, 3]}
        fontWeight="heading"
        color="darkBlue"
        maxWidth={582}
        width="100%"
        mx="auto"
        mb={3}
        lineHeight="3.157rem"
        sx={{ textTransform: "uppercase" }}
      >
        A community of developers, who practice excellence, in service of
        Filipinos
      </Text>
      <Image src={zigzag} alt="divider" mb={[3, 4]} />
    </Box>
    <Box
      height={[200, 330]}
      width="80%"
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
    <Box height={[50, 83]} backgroundColor="darkBlue" mt={[-50, -83]} />
  </Box>
)

export default VisionSection

import React from "react"
import { Box, Text, Image } from "rebass"

import memberPlaceholder from "../images/member-placeholder.jpg"

const TeamMember = ({ member: { photo, name, role } }) => (
  <Box
    width="100%"
    sx={{
      flexShrink: [0, 1],
      textAlign: "center",
      transition: "200ms transform",
      textShadow: "main",
      "&:hover": {
        transform: "translateY(-0.5rem)",
        cursor: "pointer",
        img: {
          transform: "translateY(-0.5rem)",
        },
      },
    }}
  >
    <Image
      sx={{
        objectFit: "cover",
        objectPosition: "center",
        width: "174px",
        height: "174px",
        borderRadius: "50%",
        transition: "200ms transform",
        boxShadow: "main",
      }}
      src={photo || memberPlaceholder}
      alt={name}
    />
    <Text
      mt={0}
      fontSize={2}
      fontWeight="bold"
      color="white"
      sx={{
        textTransform: "uppercase",
      }}
    >
      {name}
    </Text>
    <Text fontSize={1} color="white">
      {role}
    </Text>
  </Box>
)

export default TeamMember

import React from "react"
import { Box, Text, Image } from "rebass"

import memberPlaceholder from "../images/member-placeholder.jpg"

const TeamMember = ({ member: { photo, name, role }, ...props }) => (
  <Box
    sx={{
      display: "inline-flex",
      flexDirection: ["row", null, "column"],
      alignItems: "center",
      transition: "200ms transform",
      textShadow: "main",
      "&:hover": {
        transform: ["translateY(-0.3rem)", null, "translateY(-0.5rem)"],
        cursor: "pointer",
        img: {
          transform: [null, null, "translateY(-0.5rem)"],
        },
      },
    }}
    {...props}
  >
    <Image
      mb={[0, null, 1]}
      mr={[2, null, 0]}
      sx={{
        boxSizing: "content-box",
        objectFit: "cover",
        objectPosition: "center",
        minWidth: ["5em", null, "174px"],
        maxWidth: 0,
        borderRadius: "50%",
        borderWidth: ["3px", null, "4px"],
        borderStyle: "solid",
        borderColor: "white",
        transition: "200ms transform",
        boxShadow: "main",
      }}
      src={photo || memberPlaceholder}
      alt={name}
    />
    <Box minWidth="10em" textAlign={["left", null, "center"]}>
      <Text
        mt={0}
        fontSize={[1, 2]}
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
  </Box>
)

export default TeamMember

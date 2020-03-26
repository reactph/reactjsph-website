import React from "react"
import { Box, Text, Image } from "rebass"
import { keyframes } from "@emotion/core"

import memberPlaceholder from "../images/member-placeholder.jpg"

const float = keyframes`
  to {
    transform: translateY(-0.3rem);
  }
`

const TeamMember = ({
  isHighlighted = false,
  member: { photo, name, role },
  onMouseEnter: handleMouseEnter,
  ...props
}) => (
  <Box
    onMouseEnter={handleMouseEnter}
    sx={{
      display: "inline-flex",
      flexDirection: ["row", null, "column"],
      alignItems: "center",
      textShadow: "main",
      cursor: "pointer",
      ...(isHighlighted && {
        animation: `${float} 300ms ease-in-out infinite alternate`,
      }),
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
        transition: "300ms box-shadow, 300ms transform",
        ...(isHighlighted && {
          boxShadow: "0 0 80px rgba(123, 213, 245, 0.75)",
          transform: "scale(1.05)",
        }),
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

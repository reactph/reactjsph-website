import React from "react"

import { Flex, Text } from "rebass"

const CircleButton = ({ children, ...props }) => (
  <Flex
    role="button"
    tabIndex="0"
    justifyContent="center"
    alignItems="center"
    width="3rem"
    height="3rem"
    backgroundColor="rgba(255, 255, 255, 0.25)"
    sx={{
      position: "relative",
      zIndex: 1,
      borderRadius: "50%",
      outline: "none",
      userSelect: "none",
      cursor: "pointer",
      "&::before": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        boxShadow: "0 0 24px rgba(123, 213, 245, 0.75)",
        opacity: 0,
        borderRadius: "50%",
        transition: "200ms opacity",
        content: "''",
      },
      "&:hover, &:focus": {
        "&::before": {
          opacity: 1,
        },
      },
    }}
    {...props}
  >
    <Text color="white" fontSize="5" mb="1" sx={{ position: "relative" }}>
      {children}
    </Text>
  </Flex>
)

export default CircleButton

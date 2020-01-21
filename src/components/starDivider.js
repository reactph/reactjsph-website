import React from "react"
import { Flex, Text } from "rebass"

const StarDivider = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      sx={{
        ":before": {
          content: "''",
          display: "block",
          borderTop: "2px solid",
          borderColor: "gold",
          flex: 1,
        },
        ":after": {
          content: "''",
          display: "block",
          borderTop: "2px solid",
          borderColor: "gold",
          flex: 1,
        },
      }}
    >
      <Text fontSize={4} color="gold" mx={1}>
        &#11089;
      </Text>
    </Flex>
  )
}

export default StarDivider

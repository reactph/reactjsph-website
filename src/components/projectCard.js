import React from "react"
import { Box, Button, Flex, Text } from "rebass"

const ProjectCard = ({
  project: { name, author, description, homepage, tags },
}) => (
  <Flex
    bg="white"
    p={2}
    mb={2}
    color="darkBlue"
    justifyContent="space-between"
    alignItems="start"
    flexDirection={["column", null, "row"]}
    sx={{
      cursor: "pointer",
      transition: "transform 200ms",
      ":hover": {
        transform: "translateY(-0.25rem)",
      },
    }}
  >
    <Box mr={[0, null, 3]} mb={[2, null, 0]}>
      <Text
        as="p"
        fontSize={2}
        fontWeight="hero"
        sx={{ textTransform: "uppercase" }}
      >
        {name}
      </Text>
      <Text as="p" mb={1}>
        {description}
      </Text>
      <Box as="ul" mb={1}>
        {tags.slice(0, 5).map(tag => (
          <Box
            as="li"
            display="inline-block"
            letterSpacing="0.1em"
            fontSize={0}
            sx={{
              textTransform: "uppercase",

              "&:not(:last-child)::after": {
                display: "inline-block",
                content: "'×'",
                mx: "0.4rem",
              },
            }}
          >
            {tag}
          </Box>
        ))}
      </Box>
      <Text as="p">{author}</Text>
    </Box>
    <Button
      as="a"
      href={homepage}
      target="_blank"
      rel="noopener noreferrer"
      variant="outline"
      mr="6px"
      mb="6px"
    >
      ↗&nbsp;Open
    </Button>
  </Flex>
)

export default ProjectCard

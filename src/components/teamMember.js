import React from "react"
import { Box, Text, Image, Flex } from "rebass"
import { keyframes } from "@emotion/core"

import memberPlaceholder from "../images/member-placeholder.jpg"

const float = keyframes`
  to {
    transform: translateY(-0.3rem);
  }
`

const scaleIn = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }

  to {
    opacity: 0;
    transform: scale(0);
  }
`

const animationScaleIn = `${scaleIn} 300ms 0 both`

const scaleOut = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`

const animationScaleOut = `${scaleOut} 300ms both`

/**
 * Utility to emulate the responsive array syntax for non-style props.
 * @param {*} prop - The prop to be made responsive.
 * @param {string} propValueFn - Callback whose return value will be
 *     used to determine the value of a style for each breakpoint.
 *     If prop is an array, it will receive the corresponding value
 *     at each iteration. Otherwise, it will be called with just the
 *     value of prop.
 */
const responsiveProp = (prop, propValueFn) => {
  if (Array.isArray(prop)) {
    return prop.map(p => propValueFn(p))
  }

  return propValueFn(prop)
}

const TeamMember = ({
  isHidden,
  isHighlighted,
  member: { photo, name, role, website },
  onMouseEnter: handleMouseEnter,
  ...props
}) => (
  <Box
    as="a"
    href={website}
    target="_blank"
    rel="noopener noreferrer"
    onMouseEnter={handleMouseEnter}
    sx={{
      textShadow: "main",
      textDecoration: "none",
      cursor: "pointer",
      ...(isHighlighted && {
        animation: responsiveProp(isHidden, value =>
          value ? "none" : `${float} 300ms ease-in-out infinite alternate`
        ),
      }),
    }}
    {...props}
  >
    <Flex
      display="inline-flex"
      flexDirection={["row", null, "column"]}
      alignItems="center"
      sx={{
        visibility: responsiveProp(isHidden, value =>
          value ? "hidden" : "visible"
        ),
        animation: responsiveProp(isHidden, value =>
          value ? animationScaleIn : animationScaleOut
        ),
      }}
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
    </Flex>
  </Box>
)

export default TeamMember

import React from "react"
import { Box, Flex, Text, Link, Image } from "rebass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faFacebookMessenger,
  faMeetup,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"

import Container from "./container"
import Logo from "../images/brandmark.svg"

const FooterQuery = graphql`
  query FooterQuery {
    site {
      siteMetadata {
        social {
          facebook
          linkedin
          meetup
          messenger
        }
      }
    }
  }
`
const designerLink = "https://galacemiguel.com"

const Footer = () => (
  <Box as="footer" backgroundColor="darkBlue" pb={2} mt={3}>
    <Container>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          gridTemplateRows: "1fr 1fr",
          gridTemplateAreas: `"TopLeft Logo TopRight" "BottomLeft Logo BottomRight"`,
        }}
      >
        <Box sx={{ gridArea: "TopLeft", borderBottom: "2px solid #505D90" }} />
        <Box sx={{ gridArea: "TopRight", borderBottom: "2px solid #505D90" }} />
        <Box sx={{ gridArea: "BottomLeft" }}>
          <FooterContentLeft />
        </Box>
        <Box sx={{ gridArea: "BottomRight" }}>
          <FooterContentRight />
        </Box>
        <Box sx={{ gridArea: "Logo" }}>
          <FooterBrandLogo />
        </Box>
      </Box>
    </Container>
  </Box>
)

const FooterBrandLogo = () => (
  <Box px={2} textAlign="center">
    <GatsbyLink to="/">
      <Image src={Logo} alt="React JS Philippines" width="10.88rem" />
    </GatsbyLink>
  </Box>
)

const FooterContentLeft = () => (
  <Box mt={1}>
    <Text fontSize={1} color="white">
      {`Designed by `}
      <Link href={designerLink} color="white">
        Miguel N. Galace.
      </Link>
    </Text>
    <Text fontSize={1} color="white">
      © 2019 ReactJS Philippines. All rights reserved.
    </Text>
  </Box>
)

const FooterContentRight = () => {
  const {
    site: {
      siteMetadata: {
        social: { facebook, linkedin, meetup, messenger },
      },
    },
  } = useStaticQuery(FooterQuery)

  return (
    <Flex flex={1} justifyContent="flex-end" alignItems="center" mt={1}>
      <Text
        fontSize={2}
        color="white"
        fontWeight="bold"
        mr={1}
        sx={{ textTransform: "uppercase" }}
      >
        Join the community
      </Text>

      <Text fontSize={3}>
        <Link href={facebook} color="white" mr={1}>
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
        <Link href={messenger} color="white" mr={1}>
          <FontAwesomeIcon icon={faFacebookMessenger} />
        </Link>
        <Link href={meetup} color="white" mr={1}>
          <FontAwesomeIcon icon={faMeetup} />
        </Link>
        <Link href={linkedin} color="white">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
      </Text>
    </Flex>
  )
}

export default Footer

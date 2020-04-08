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
  <Box as="footer" backgroundColor="darkBlue" py={3}>
    <Container>
      <Box
        sx={{
          color: "white",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          gridTemplateRows: ["auto", null, "1fr 1fr"],
          gridTemplateAreas: [
            `"TopLeft Logo TopRight"
            "BottomRight BottomRight BottomRight"
            "BottomLeft BottomLeft BottomLeft"`,
            null,
            `"TopLeft Logo TopRight"
            "BottomLeft Logo BottomRight"`,
          ],
        }}
      >
        <Box
          width="100%"
          m={["auto", null, 0]}
          sx={{
            gridArea: "TopLeft",
            borderBottom: "1px solid rgba(255, 255, 255, .8)",
          }}
        />
        <Box
          width="100%"
          m={["auto", null, 0]}
          sx={{
            gridArea: "TopRight",
            borderBottom: "1px solid rgba(255, 255, 255, .8)",
          }}
        />
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
  <Box px={[1, null, 3]} textAlign="center">
    <GatsbyLink to="/">
      <Image
        src={Logo}
        alt="React JS Philippines"
        width={["8rem", null, "10.88rem"]}
      />
    </GatsbyLink>
  </Box>
)

const FooterContentLeft = () => (
  <Box mt={2} textAlign={["center", null, "left"]}>
    <Text fontSize={1}>
      {`Designed by `}
      <Link href={designerLink} color="white">
        Miguel N. Galace.
      </Link>
    </Text>
    <Text fontSize={1}>
      © {new Date().getFullYear()} ReactJS Philippines. All rights reserved.
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
    <Flex
      flex={1}
      justifyContent="flex-end"
      alignItems={["center", null, "flex-end"]}
      mt={2}
      flexDirection="column"
    >
      <Text
        fontSize={2}
        fontWeight="bold"
        textAlign="right"
        mb="1"
        sx={{ textTransform: "uppercase" }}
      >
        Join the community
      </Text>

      <Text fontSize={3}>
        <Link href={facebook} color="white" mr={2}>
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
        <Link href={messenger} color="white" mr={2}>
          <FontAwesomeIcon icon={faFacebookMessenger} />
        </Link>
        <Link href={meetup} color="white" mr={2}>
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

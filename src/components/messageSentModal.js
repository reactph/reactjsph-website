import React from "react"
import { Flex, Box, Text, Link } from "rebass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faFacebookMessenger,
  faMeetup,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { useStaticQuery, graphql } from "gatsby"

const ModalQuery = graphql`
  query ModalQuery {
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

const MessageSentModal = () => {
  const {
    site: {
      siteMetadata: {
        social: { facebook, linkedin, meetup, messenger },
      },
    },
  } = useStaticQuery(ModalQuery)

  return (
    <>
      <Flex
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            width: "50%",
            opacity: 1,
          }}
        >
          <Box
            sx={{
              backgroundColor: "darkBlue",
              padding: "6rem 3rem",
            }}
          >
            <Text
              fontSize={[3, 5]}
              fontFamily="body"
              fontWeight="bold"
              color="gold"
              sx={{
                textTransform: "uppercase",
              }}
            >
              AWESOME!
            </Text>
            <Text
              fontSize={[1, 3]}
              fontFamily="body"
              color="white"
              sx={{
                textTransform: "uppercase",
              }}
            >
              Your message has been sent.
            </Text>
          </Box>
          <Flex
            flex={1}
            justifyContent="center"
            alignItems="center"
            my={2}
            flexDirection="column"
          >
            <Text
              fontSize={2}
              fontFamily="body"
              fontWeight="bold"
              color="darkBlue"
              mb={1}
              sx={{ textTransform: "uppercase" }}
            >
              Join the community
            </Text>

            <Text fontSize={3}>
              <Link href={facebook} color="darkBlue" px={1}>
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link href={messenger} color="darkBlue" px={1}>
                <FontAwesomeIcon icon={faFacebookMessenger} />
              </Link>
              <Link href={meetup} color="darkBlue" px={1}>
                <FontAwesomeIcon icon={faMeetup} />
              </Link>
              <Link href={linkedin} color="darkBlue" px={1}>
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </Text>
          </Flex>
        </Box>
      </Flex>
    </>
  )
}

export default MessageSentModal

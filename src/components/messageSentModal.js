import React from "react"
import PropTypes from "prop-types"
import { Flex, Box, Text, Link, Button } from "rebass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faFacebookMessenger,
  faMeetup,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { useStaticQuery, graphql } from "gatsby"
import { DialogOverlay, DialogContent } from "@reach/dialog"
import "@reach/dialog/styles.css"

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

const MessageSentModal = ({ isOpen, onDismiss }) => {
  const {
    site: {
      siteMetadata: {
        social: { facebook, linkedin, meetup, messenger },
      },
    },
  } = useStaticQuery(ModalQuery)

  return (
    <DialogOverlay
      isOpen={isOpen}
      onDismiss={onDismiss}
      aria-label="Modal Success Overlay"
    >
      <DialogContent style={{ padding: 0 }} aria-label="Modal Success Content">
        <Box
          sx={{
            backgroundColor: "white",
            opacity: 1,
            position: "relative",
          }}
        >
          <Button
            m={2}
            sx={{ position: "absolute", right: 0 }}
            onClick={onDismiss}
          >
            <span aria-hidden>×</span>
          </Button>

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
            py={2}
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
      </DialogContent>
    </DialogOverlay>
  )
}

MessageSentModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onDismiss: PropTypes.func.isRequired,
}

export default MessageSentModal

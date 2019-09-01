import React from "react"
import { Box, Flex, Text, Link } from "rebass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faFacebookMessenger,
  faMeetup,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { StaticQuery, graphql } from "gatsby"

import Container from "./container"

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SiteSocialQuery {
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
    `}
    render={({
      site: {
        siteMetadata: {
          social: { facebook, linkedin, meetup, messenger },
        },
      },
    }) => (
      <Box as="footer" backgroundColor="darkBlue" pb={2} mt={3}>
        <Container>
          <Flex justifyContent="space-between" alignItems="flex-start">
            <Box
              pt={1}
              flex={1}
              textAlign="left"
              sx={{
                borderTop: "2px solid #505D90",
              }}
            >
              <Text fontSize={1} color="white">
                {`Designed by `}
                <Link href="/" color="white">
                  Miguel N. Galace.
                </Link>
              </Text>
              <Text fontSize={1} color="white">
                © 2019 ReactJS Philippines. All rights reserved.
              </Text>
            </Box>

            <Box>SUN</Box>

            <Flex
              pt={1}
              flex={1}
              justifyContent="flex-end"
              alignItems="center"
              sx={{
                borderTop: "2px solid #505D90",
              }}
            >
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
          </Flex>
        </Container>
      </Box>
    )}
  />
)

export default Footer

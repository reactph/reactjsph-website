import React from "react"
import { Box, Flex, Image, Text } from "rebass"
import {
  faBehance,
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CONTACT_ICON_MAP = {
  website: faLink,
  email: faEnvelope,
  linkedin: faLinkedinIn,
  github: faGithub,
  twitter: faTwitter,
  behance: faBehance,
}

const DevBio = ({
  dev: { avatar, name, title, company, blurb, skills = [], contacts = [] },
}) => (
  <Flex color="white" flexDirection={["row", "column"]}>
    <Image width="100%" height="100%" mb={[0, 2]} mr={[2, 0]} src={avatar} />
    <Box>
      <Text
        as="p"
        color="lightBlue"
        fontSize={2}
        fontWeight="hero"
        sx={{ textTransform: "uppercase" }}
      >
        {name}
      </Text>
      <Text
        as="p"
        mb={1}
        letterSpacing="0.1em"
        fontSize={0}
        color="gold"
        sx={{ textTransform: "uppercase" }}
      >
        {[title, company].filter(Boolean).join(", ")}
      </Text>
      <Text as="p" mb={1}>
        {blurb}
      </Text>
      <Box as="ul" mb={1}>
        {skills.slice(0, 5).map(skill => (
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
            {skill}
          </Box>
        ))}
      </Box>
      <ul>
        {contacts.slice(0, 5).map(contact => (
          <Box as="li" display="inline-block" mr={1}>
            <a href={contact.url} target="_blank" rel="noreferrer noopener">
              <FontAwesomeIcon
                icon={CONTACT_ICON_MAP[contact.type]}
                color="gold"
              />
            </a>
          </Box>
        ))}
      </ul>
    </Box>
  </Flex>
)

export default DevBio

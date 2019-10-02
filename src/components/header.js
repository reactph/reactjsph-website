import { Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Box, Image, Flex, Link } from "rebass"
import Logo from "../images/logo.svg"
import Container from "./container"

const Header = ({ siteTitle }) => (
  <Box mb={0} as="header">
    <Container>
      <Flex color="white" alignItems="center" py={0}>
        <GatsbyLink
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        />
        <Image
          src={Logo}
          alt={siteTitle}
          sx={{
            width: ["206px", "50%"],
          }}
        />
        <Box mx="auto" />
        <Box>
          <Link
            mx={2}
            p={0}
            variant="nav"
            href="/meetups"
            sx={{
              display: "inline-block",
              transition: "400ms ease all",
              textTransform: "uppercase",
              "&:hover": {
                color: "gold",
              },
              "&::after": {
                content: '""',
                display: "block",
                width: "0",
                height: "2px",
                background: "gold",
                transition: "width 300ms",
              },
              "&:hover::after": {
                width: "100%",
              },
            }}
          >
            Meetups
          </Link>
          <Link
            mx={2}
            p={0}
            variant="nav"
            href="/blog"
            sx={{
              transition: "400ms ease all",
              textTransform: "uppercase",
              "&:hover": {
                color: "gold",
              },
              "&::after": {
                content: '""',
                display: "block",
                width: "0",
                height: "2px",
                background: "gold",
                transition: "width 300ms",
              },
              "&:hover::after": {
                width: "100%",
              },
            }}
          >
            Blog
          </Link>
          <Link
            mx={2}
            p={0}
            variant="nav"
            href="/jobs"
            sx={{
              transition: "400ms ease all",
              textTransform: "uppercase",
              "&:hover": {
                color: "gold",
              },
              "&::after": {
                content: '""',
                display: "block",
                width: "0",
                height: "2px",
                background: "gold",
                transition: "width 300ms",
              },
              "&:hover::after": {
                width: "100%",
              },
            }}
          >
            Jobs
          </Link>
        </Box>
      </Flex>
    </Container>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

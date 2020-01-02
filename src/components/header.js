import { Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Box, Image, Flex, Link } from "rebass"
import Logo from "../images/logo.svg"
import Container from "./container"

const menus = [
  { label: "Meetups", path: "/meetups" },
  { label: "Blog", path: "/blog" },
  { label: "Jobs", path: "/jobs" },
]

const Header = ({ siteTitle }) => (
  <Box as="header" backgroundColor="transparent" position="absolute">
    <Container>
      <Flex color="white" justifyContent="space-between" py={1}>
        <GatsbyLink
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Image src={Logo} alt={siteTitle} width="12.5rem" />
        </GatsbyLink>
        <Box>
          {menus.map(menu => (
            <Link key={menu.label} variant="nav" href={menu.path}>
              {menu.label}
            </Link>
          ))}
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

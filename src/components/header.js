import { Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Box, Image, Flex, Link } from "rebass"
import Logo from "../images/logo.svg"
import Container from "./container"

const menus = [
  { id: 1, label: "Meetups", path: "/meetups" },
  { id: 2, label: "Blog", path: "/blog" },
  { id: 3, label: "Jobs", path: "/jobs" },
]

const Header = ({ siteTitle }) => (
  <Box mb={0} as="header">
    <Container>
      <Flex color="white" justifyContent="space-between" py={0}>
        <GatsbyLink
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Image
            src={Logo}
            alt={siteTitle}
            sx={{
              width: ["206px", "50%"],
            }}
          />
        </GatsbyLink>
        <Box>
          {menus.map(menu => (
            <Link key={menu.id} variant="nav" href={menu.path}>
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

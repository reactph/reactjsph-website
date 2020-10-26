import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"
import { Box, Flex, Link, Text } from "rebass"
import { Brandmark } from "../images"
import Container from "./container"

const menus = [{ label: "Dev Board", path: "/dev-board" }]

const Header = ({ siteTitle }) => (
  <Box
    as="header"
    sx={{
      backgroundColor: "transparent",
      position: "relative",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 999,
    }}
  >
    <Container>
      <Flex
        color="white"
        alignItems="center"
        justifyContent="space-between"
        py={2}
      >
        <Flex
          as={GatsbyLink}
          to="/"
          alignItems="center"
          sx={{ textDecoration: "none" }}
        >
          <Box as={Brandmark} title={siteTitle} height="4rem" mr={1} />
          <Text
            display={["none", "initial"]}
            as="h1"
            fontSize={3}
            fontWeight="heading"
            lineHeight={1}
            sx={{ textTransform: "uppercase" }}
          >
            <Text as="span" display="block" color="lightBlue">
              ReactJS
            </Text>
            <Text as="span" display="block" color="gold">
              Philippines
            </Text>
          </Text>
        </Flex>

        <ul>
          {menus.map(menu => (
            <li key={menu.label}>
              <Link variant="nav" href={menu.path} fontSize={[1, 2]}>
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>
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

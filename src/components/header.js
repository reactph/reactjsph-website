import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"
import { Box, Flex, Link } from "rebass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { useWindowSize, useOnClickOutside } from "../utils"
import { Logo } from "../images"
import Container from "./container"

const menus = [
  { label: "Meet-ups", path: "/meetups" },
  { label: "Blog", path: "/blog" },
  { label: "Jobs", path: "/jobs" },
]

const Header = ({ siteTitle }) => {
  const navRef = useRef()

  const size = useWindowSize()
  const isMobile = size.width < 640

  const [showMenu, setShowMenu] = useState()

  useOnClickOutside(navRef, () => setShowMenu(false))

  useEffect(() => {
    if (isMobile) {
      setShowMenu(false)
    }
  }, [isMobile])

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "visible"
    }
  }, [showMenu])

  return (
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
          <Link as={GatsbyLink} to="/">
            <Logo title={siteTitle} width="12.5rem" />
          </Link>

          <Box as="nav" ref={navRef} sx={{ display: "none" }}>
            <Box
              as="button"
              fontSize={3}
              display={["block", "none"]}
              width="45px"
              sx={{
                backgroundColor: "transparent",
                color: "white",
                border: "2px solid transparent",
                "&:focus, &:active": {
                  borderColor: "lightBlue",
                },
                position: "relative",
                zIndex: 1,
              }}
              onClick={() => setShowMenu(!showMenu)}
              aria-hidden={!isMobile}
              aria-label="Toggle nav"
            >
              <FontAwesomeIcon
                aria-hidden="true"
                icon={!showMenu ? faBars : faTimes}
                size="1x"
              />
            </Box>

            <Flex
              flexDirection={["column", "row"]}
              alignItems="center"
              justifyContent={["flex-start", "center"]}
              height={["100vh", "100%"]}
              backgroundColor={["rgba(0, 0, 0, 0.85)", "initial"]}
              py={[4, 0]}
              sx={{
                transition: "right 300ms ease",
                position: ["absolute", "static"],
                top: 0,
                right: showMenu ? 0 : "-250px",
                bottom: 0,
                width: ["250px", "100%"],
                overflow: ["hidden", "visible"],
              }}
            >
              {menus.map(menu => (
                <Link
                  key={menu.label}
                  variant="nav"
                  href={menu.path}
                  fontSize={[2, "inherit"]}
                  my={[2, 0]}
                >
                  {menu.label}
                </Link>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

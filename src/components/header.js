import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"
import { Box, Image, Flex, Link } from "rebass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { useWindowSize } from "../utils"
import Logo from "../images/logo.svg"
import Container from "./container"

const menus = [
  { label: "Meetups", path: "/meetups" },
  { label: "Blog", path: "/blog" },
  { label: "Jobs", path: "/jobs" },
]

const Header = ({ siteTitle }) => {
  const size = useWindowSize()
  const [isMobile, setIsMobile] = useState()
  const [showMenu, setShowMenu] = useState()

  useEffect(() => {
    if (size.width < 640) {
      setIsMobile(true)
      setShowMenu(false)
    } else {
      setIsMobile(false)
      setShowMenu(false)
    }
  }, [size])

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "visible"
    }
  }, [showMenu])

  const handleClickOutsideNav = e => {
    if (!e.target.closest("#nav-menu") && showMenu) {
      setShowMenu(false)
    }
  }

  useEffect(() => {
    document.body.addEventListener("click", handleClickOutsideNav)

    return () => {
      document.body.removeEventListener("click", handleClickOutsideNav)
    }
  })

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
          justifyContent="space-between"
          alignItems="center"
          py={2}
        >
          <GatsbyLink to="/">
            <Image src={Logo} alt={siteTitle} width="12.5rem" />
          </GatsbyLink>

          <Box as="nav" id="nav-menu">
            <Box
              as="button"
              fontSize={3}
              display={isMobile ? "block" : "none"}
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
                ...(isMobile
                  ? {
                      position: "absolute",
                      top: 0,
                      right: showMenu ? 0 : "-250px",
                      bottom: 0,
                      width: "250px",
                      overflow: "hidden",
                    }
                  : {}),
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

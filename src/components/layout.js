/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Box, Text, Link } from "rebass"

import Header from "./header"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />

        <Box m="0 auto" maxWidth={960} px={1}>
          <Box as="main">{children}</Box>
        </Box>

        <Box as="footer">
          <Text textAlign="center">
            © {new Date().getFullYear()}, Built with
            {` `}
            <Link href="https://www.gatsbyjs.org">Gatsby</Link>
          </Text>
        </Box>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

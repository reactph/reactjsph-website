import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { Box } from "rebass"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

// Sample styling pattern
const styles = {
  imageWrapper: css`
    max-width: 300px;
    margin-bottom: 1.45rem;
  `,
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    {/* Sample implementation of Rebass and emotion */}
    <Box
      py={90}
      css={css`
        background: red;
      `}
    >
      <div css={styles.imageWrapper}>
        <Image />
      </div>
    </Box>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

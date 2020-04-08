import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        cover
        url
      }
    }
    heroImg: file(relativePath: { eq: "hero-img.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const SEO = ({ description, lang, meta, title }) => {
  const { site, heroImg } = useStaticQuery(query)

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: `${title} | ${site.siteMetadata.title}`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.url,
        },
        {
          property: `og:image`,
          content: `${site.siteMetadata.url}${site.siteMetadata.cover}`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:url`,
          content: site.siteMetadata.url,
        },
        {
          name: `twitter:image`,
          content: `${site.siteMetadata.url}${site.siteMetadata.cover}`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: `${title} | ${site.siteMetadata.title}`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-162331321-1"
      />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-162331321-1');
        `}
      </script>
      <link rel="preload" as="image" href={heroImg.childImageSharp.fluid.src} />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO

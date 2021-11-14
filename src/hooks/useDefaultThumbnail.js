import { useStaticQuery, graphql } from "gatsby"

const useDefaultThumbnail = () => {
  const data = useStaticQuery(graphql`
    {
      defaultThumbnail: file(relativePath: { eq: "default-thumbnail.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return data.defaultThumbnail.childImageSharp.fluid.src
}

export default useDefaultThumbnail

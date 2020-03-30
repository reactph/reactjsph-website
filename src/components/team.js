import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Box, Flex, Text, Image } from "rebass"
import "csshake/dist/csshake.css"

import Container from "./container"
import CircleButton from "./circleButton"
import "../styles/custom-shake.css"
import brandmarkLogo from "../images/brandmark.svg"
import orbitBackground from "../images/orbits.svg"
import TeamPage from "./teamPage"

export const fluidMemberImage = graphql`
  fragment fluidMemberImage on File {
    childImageSharp {
      fluid(maxWidth: 200, quality: 90) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

const memberImagesQuery = graphql`
  query {
    imgFran: file(relativePath: { eq: "team/fran.jpg" }) {
      ...fluidMemberImage
    }
    imgJayson: file(relativePath: { eq: "team/jayson.jpg" }) {
      ...fluidMemberImage
    }
    imgGuigi: file(relativePath: { eq: "team/guigi.jpg" }) {
      ...fluidMemberImage
    }
    imgMarj: file(relativePath: { eq: "team/marj.jpg" }) {
      ...fluidMemberImage
    }
    imgJedo: file(relativePath: { eq: "team/jedo.jpg" }) {
      ...fluidMemberImage
    }
    imgJerome: file(relativePath: { eq: "team/jerome.jpg" }) {
      ...fluidMemberImage
    }
    imgGian: file(relativePath: { eq: "team/gian.jpg" }) {
      ...fluidMemberImage
    }
    imgMichael: file(relativePath: { eq: "team/michael.jpg" }) {
      ...fluidMemberImage
    }
    imgRem: file(relativePath: { eq: "team/rem.jpg" }) {
      ...fluidMemberImage
    }
    imgEricson: file(relativePath: { eq: "team/ericson.jpg" }) {
      ...fluidMemberImage
    }
    imgJoe: file(relativePath: { eq: "team/joe.jpg" }) {
      ...fluidMemberImage
    }
    imgChristian: file(relativePath: { eq: "team/christian.jpg" }) {
      ...fluidMemberImage
    }
  }
`

const FIRST_PAGE_SIZE = 7
const NORMAL_PAGE_SIZE = 9

const TeamSection = () => {
  const {
    imgFran,
    imgJayson,
    imgGuigi,
    imgMarj,
    imgJedo,
    imgJerome,
    imgGian,
    imgMichael,
    imgRem,
    imgEricson,
    imgJoe,
    imgChristian,
  } = useStaticQuery(memberImagesQuery)
  const Members = [
    {
      id: 0,
      photo: imgFran?.childImageSharp.fluid.src,
      name: "Franrey Saycon",
      role: "Head Director",
      website: "https://fsaycon.dev",
    },
    {
      id: 1,
      photo: imgJayson?.childImageSharp.fluid.src,
      name: "Jayson de los reyes",
      role: "Director, Internal Affairs",
      website: "https://itsdyeyson.dev/",
    },
    {
      id: 2,
      photo: imgGuigi?.childImageSharp.fluid.src,
      name: "Miguel N. Galace",
      role: "Director, External Affairs",
      website: "https://galacemiguel.com",
    },
    {
      id: 3,
      photo: imgMarj?.childImageSharp.fluid.src,
      name: "Marjorie J. Martinez",
      role: "Director, External Affairs",
      website: "https://github.com/marjmartinezz",
    },
    {
      id: 4,
      photo: imgJedo?.childImageSharp.fluid.src,
      name: "Jedo de la Peña II",
      role: "Member, Core Team",
    },
    {
      id: 5,
      photo: imgJerome?.childImageSharp.fluid.src,
      name: "Jerome Estiller",
      role: "Member, Core Team",
      website: "https://github.com/jromest",
    },
    {
      id: 6,
      photo: imgGian?.childImageSharp.fluid.src,
      name: "Gian Hirakawa",
      role: "Member, Core Team",
      website: "https://www.linkedin.com/in/gian-hirakawa",
    },
    {
      id: 7,
      photo: imgMichael?.childImageSharp.fluid.src,
      name: "Michael Isaig",
      role: "Member, Core Team",
    },
    {
      id: 8,
      photo: imgRem?.childImageSharp.fluid.src,
      name: "Rem Lampa",
      role: "Member, Core Team",
      website: "https://facebook.com/Rem.Lampa",
    },
    {
      id: 9,
      photo: imgEricson?.childImageSharp.fluid.src,
      name: "Ericson Luciano",
      role: "Member, Core Team",
      website: "https://ericsonluciano.com",
    },
    {
      id: 10,
      photo: imgJoe?.childImageSharp.fluid.src,
      name: "Joe Palala",
      role: "Member, Core Team",
      website: "https://jpalala.io",
    },
    {
      id: 11,
      photo: imgChristian?.childImageSharp.fluid.src,
      name: "Christian Villamin",
      role: "Member, Core Team",
    },
  ]

  const [page, setPage] = useState(1)
  const pageTotal =
    Math.ceil((Members.length - FIRST_PAGE_SIZE) / NORMAL_PAGE_SIZE) + 1

  const [highlightedMemberId, setHighlightedMemberId] = useState(Members[0].id)

  return (
    <Box backgroundColor="darkBlue" overflow="hidden" mb={[3, null, 6]}>
      <Container>
        <Flex justifyContent="center" alignItems="center">
          <Text
            fontSize={[3, 4, 5]}
            fontWeight="bold"
            color="lightBlue"
            sx={{
              borderBottom: "0.15em groove",
              borderColor: "lightBlue",
              textTransform: "uppercase",
              textShadow: "main",
              whiteSpace: "nowrap",
            }}
          >
            « Core
          </Text>
          <Image
            src={brandmarkLogo}
            alt="ReactJS Philippines"
            width="20vw"
            maxWidth="10rem"
          />
          <Text
            fontSize={[3, 4, 5]}
            fontWeight="bold"
            color="lightBlue"
            sx={{
              borderBottom: "0.15em groove",
              borderColor: "lightBlue",
              textTransform: "uppercase",
              textShadow: "main",
              whiteSpace: "nowrap",
            }}
          >
            Team »
          </Text>
        </Flex>
      </Container>
      <Box
        pt={[2, 3, 5]}
        pb={[3, null, 8]}
        sx={{
          position: "relative",
        }}
      >
        <Image
          className="shake shake-custom shake-constant"
          src={orbitBackground}
          sx={{
            position: "absolute",
            top: "-9999px",
            bottom: "-9999px",
            left: "-9999px",
            right: "-9999px",
            maxWidth: "none",
            height: "100%",
            m: "auto",
            userSelect: "none",
          }}
        />
        <Container>
          <Box
            width={["60%", "90%"]}
            minWidth="16em"
            mx="auto"
            sx={{ position: "relative" }}
          >
            <TeamPage
              isFirstPage
              members={Members.slice(0, 7)}
              isCurrent={page === 1}
              highlightedMemberId={highlightedMemberId}
              setHighlightedMemberId={setHighlightedMemberId}
            />
            <TeamPage
              members={Members.slice(7)}
              isCurrent={page === 2}
              highlightedMemberId={highlightedMemberId}
              setHighlightedMemberId={setHighlightedMemberId}
              mt={[2, 3, 0]}
              sx={{
                position: ["relative", null, "absolute"],
                top: 0,
                left: 0,
              }}
            />
            <Flex
              alignItems="center"
              margin="auto"
              sx={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: "100%",
                visibility: ["hidden", null, "visible"],
              }}
            >
              <CircleButton
                pr="3px"
                mr={2}
                onClick={() =>
                  setPage(state => (state - 1 === 0 ? pageTotal : state - 1))
                }
              >
                ‹
              </CircleButton>
            </Flex>
            <Flex
              alignItems="center"
              margin="auto"
              sx={{
                position: "absolute",
                top: 0,
                left: "100%",
                bottom: 0,
                visibility: ["hidden", null, "visible"],
              }}
            >
              <CircleButton
                pl="3px"
                ml={2}
                onClick={() => setPage(state => (state % pageTotal) + 1)}
              >
                ›
              </CircleButton>
            </Flex>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default TeamSection

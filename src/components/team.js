import React, { useState } from "react"
import { Box, Flex, Text, Image } from "rebass"
import "csshake/dist/csshake.css"

import Container from "./container"
import CircleButton from "./circleButton"
import "../styles/custom-shake.css"
import brandmarkLogo from "../images/brandmark.svg"
import orbitBackground from "../images/orbits.svg"
import TeamPage from "./teamPage"

import {
  imgFran,
  imgMarj,
  imgJayson,
  imgGuigi,
  imgJoe,
  imgRem,
  imgJerome,
  imgEricson,
  imgGian,
  imgJedo,
  imgMichael,
  imgChristian,
} from "../images"

const Members = [
  {
    id: 0,
    photo: imgFran,
    name: "Franrey Saycon",
    role: "Head Director",
    website: "https://fsaycon.dev",
  },
  {
    id: 1,
    photo: imgMarj,
    name: "Marjorie J. Martinez",
    role: "Director, External Affairs",
    website: "https://github.com/marjmartinezz",
  },
  {
    id: 2,
    photo: imgJayson,
    name: "Jayson de los reyes",
    role: "Director, Internal Affairs",
    website: "https://itsdyeyson.dev/",
  },
  {
    id: 3,
    photo: imgGuigi,
    name: "Miguel N. Galace",
    role: "Director, External Affairs",
    website: "https://galacemiguel.com",
  },
  {
    id: 4,
    photo: imgJoe,
    name: "Joe Palala",
    role: "Member, Core Team",
    website: "https://jpalala.io",
  },
  {
    id: 5,
    photo: imgRem,
    name: "Rem Lampa",
    role: "Member, Core Team",
    website: "https://facebook.com/Rem.Lampa",
  },
  {
    id: 6,
    photo: imgJerome,
    name: "Jerome Estiller",
    role: "Member, Core Team",
    website: "https://github.com/jromest",
  },
  {
    id: 7,
    photo: imgChristian,
    name: "Christian Villamin",
    role: "Member, Core Team",
  },
  {
    id: 8,
    photo: imgEricson,
    name: "Ericson Luciano",
    role: "Member, Core Team",
    website: "https://ericsonluciano.com",
  },
  {
    id: 9,
    photo: imgGian,
    name: "Gian Hirakawa",
    role: "Member, Core Team",
    website: "https://www.linkedin.com/in/gian-hirakawa",
  },
  {
    id: 10,
    photo: imgMichael,
    name: "Michael Isaig",
    role: "Member, Core Team",
  },
  {
    id: 11,
    photo: imgJedo,
    name: "Jedo de la Peña II",
    role: "Member, Core Team",
  },
]

const FIRST_PAGE_SIZE = 7
const NORMAL_PAGE_SIZE = 9
const pageTotal =
  Math.ceil((Members.length - FIRST_PAGE_SIZE) / NORMAL_PAGE_SIZE) + 1

const TeamSection = () => {
  const [page, setPage] = useState(1)
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
        pb={[2, 3, 8]}
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

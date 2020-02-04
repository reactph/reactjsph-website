import React from "react"
import { Box, Flex, Text, Image } from "rebass"
import Container from "./container"
import brandmarkLogo from "../images/brandmark.svg"
import orbitBackground from "../images/orbits.svg"
import memberPlaceholder from "../images/member-placeholder.jpg"

const Members = [
  {
    id: 1,
    photo: "",
    name: "Marjorie J. Martinez",
    role: "Director, External Affairs",
  },
  {
    id: 2,
    photo: "",
    name: "Franrey Saycon",
    role: "Head Director",
  },
  {
    id: 3,
    photo: "",
    name: "Jayson de los reyes",
    role: "Director, Internal Affairs",
  },
  {
    id: 4,
    photo: "",
    name: "Joe Palala",
    role: "Member, Board of Trustees",
  },
  {
    id: 5,
    photo: "",
    name: "Rem Lampa",
    role: "Member, Board of Trustees",
  },
  {
    id: 6,
    photo: "",
    name: "RJ David",
    role: "Member, Board of Trustees",
  },
  {
    id: 7,
    photo: "",
    name: "Jerome Estiller",
    role: "Member, Board of Trustees",
  },
  {
    id: 8,
    photo: "",
    name: "Paul Simon Ongpin",
    role: "Member, Board of Trustees",
  },
  {
    id: 9,
    photo: "",
    name: "John Dave decano",
    role: "Member, Board of Trustees",
  },
]

const TeamSection = () => (
  <Box backgroundColor="darkBlue" py={5}>
    <Container>
      <Flex justifyContent="center" alignItems="center">
        <Text
          fontSize={[3, 4]}
          fontWeight="bold"
          color="lightBlue"
          sx={{
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          « Core
        </Text>
        <Image
          src={brandmarkLogo}
          alt="ReactJS Philippines"
          width={["30%", "174px"]}
        />
        <Text
          fontSize={[3, 4]}
          fontWeight="bold"
          color="lightBlue"
          sx={{
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          Team »
        </Text>
      </Flex>
      <Box
        sx={{
          position: "relative",
          height: "100%",
        }}
      >
        <Image
          src={orbitBackground}
          alt="Orbit"
          sx={{
            position: "absolute",
            width: "100%",
            top: [0, "28px"],
            left: 0,
            zIndex: 1,
            userSelect: "none",
          }}
        />
        <Box
          sx={{
            zIndex: 2,
            position: "relative",
          }}
        >
          <Box
            mt={3}
            pt={[3, 0]}
            sx={{
              display: ["flex", "grid"],
              gridTemplateColumns: [
                "initial",
                `repeat(auto-fit, minmax(295px, 1fr))`,
              ],
              overflowX: ["scroll", "initial"],
            }}
          >
            {Members.map(member => (
              <Box
                key={member.id}
                px={2}
                py={3}
                width="100%"
                sx={{
                  flexShrink: [0, 1],
                  textAlign: "center",
                  transition: "300ms ease all",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    img: {
                      transform: "scale(1.1)",
                    },
                  },
                }}
              >
                <Image
                  sx={{
                    objectFit: "cover",
                    objectPosition: "center",
                    width: "174px",
                    height: "174px",
                    borderRadius: "50%",
                    transition: "300ms ease all",
                  }}
                  src={member.photo || memberPlaceholder}
                  alt={member.name}
                />
                <Text
                  mt={0}
                  fontSize={2}
                  fontWeight="bold"
                  color="white"
                  sx={{
                    textTransform: "uppercase",
                  }}
                >
                  {member.name}
                </Text>
                <Text fontSize={1} color="white">
                  {member.role}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  </Box>
)

export default TeamSection

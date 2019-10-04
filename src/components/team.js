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
    name: "John Dave decano",
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
    id: 7,
    photo: "",
    name: "Paul Simon Ongpin",
    role: "Member, Board of Trustees",
  },
]

const TeamSection = () => {
  return (
    <Box backgroundColor="darkBlue" mt={2}>
      <Container>
        <Flex flex={1} justifyContent="center" alignItems="center">
          <Box p={0}>
            <Text
              fontSize={5}
              fontWeight="bold"
              color="lightBlue"
              sx={{
                textTransform: "uppercase",
              }}
            >
              « Core
            </Text>
          </Box>
          <Box p={0}>
            <Image
              sx={{
                width: ["174px", "50%"],
              }}
              src={brandmarkLogo}
              alt="ReactJS Philippines"
            />
          </Box>
          <Box p={0}>
            <Text
              fontSize={5}
              fontWeight="bold"
              color="lightBlue"
              sx={{
                textTransform: "uppercase",
              }}
            >
              Team »
            </Text>
          </Box>
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
              top: "28px",
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
            <Flex
              mt={2}
              flexWrap="wrap"
              flex={1}
              justifyContent="center"
              alignItems="center"
            >
              {Members.map(member => (
                <Box
                  key={member.id}
                  px={1}
                  py={2}
                  width={1 / 3}
                  sx={{
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
                    as="img"
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
              ;
            </Flex>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default TeamSection

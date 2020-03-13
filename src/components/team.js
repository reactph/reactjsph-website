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
      py={[2, 3, 4]}
      sx={{
        position: "relative",
      }}
    >
      <Image
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
          sx={{
            zIndex: 2,
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: `repeat(auto-fit, minmax(16rem, 1fr))`,
              gridRowGap: [4, null, 6],
              gridColumnGap: 4,
            }}
          >
            {Members.map(member => (
              <Box
                key={member.id}
                width="100%"
                sx={{
                  flexShrink: [0, 1],
                  textAlign: "center",
                  transition: "200ms transform",
                  textShadow: "main",
                  "&:hover": {
                    transform: "translateY(-0.5rem)",
                    cursor: "pointer",
                    img: {
                      transform: "translateY(-0.5rem)",
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
                    transition: "200ms transform",
                    boxShadow: "main",
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
      </Container>
    </Box>
  </Box>
)

export default TeamSection

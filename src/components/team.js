import React from "react"
import { Box, Flex, Text, Image } from "rebass"
import Container from "./container"
import brandmarkLogo from "../images/brandmark.svg"
import orbitBackground from "../images/orbits.svg"
import TeamMember from "./teamMember"

const Members = [
  {
    id: 0,
    photo: "",
    name: "Franrey Saycon",
    role: "Head Director",
  },
  {
    id: 1,
    photo: "",
    name: "Marjorie J. Martinez",
    role: "Director, External Affairs",
  },
  {
    id: 2,
    photo: "",
    name: "Jayson de los reyes",
    role: "Director, Internal Affairs",
  },
  {
    id: 3,
    photo: "",
    name: "Miguel N. Galace",
    role: "Director, External Affairs",
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
          height: "85%",
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
          <Box
            display="flex"
            justifyContent="center"
            width="100%"
            mb={[2, 3, 4]}
          >
            <TeamMember member={Members[0]} width={["100%", "auto"]} />
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: [
                "1fr",
                "1fr 1fr",
                "repeat(auto-fit, minmax(16rem, 1fr))",
              ],
              gridRowGap: [2, 3, 4],
              gridColumnGap: 4,
            }}
          >
            {Members.slice(1).map(member => (
              <TeamMember member={member} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  </Box>
)

export default TeamSection

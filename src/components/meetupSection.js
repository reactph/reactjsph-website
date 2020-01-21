import React from "react"
import { Box, Button, Flex, Image, Link, Text } from "rebass"
import Container from "./container"
import Logo from "../images/logo.svg"

const meetups = [
  {
    id: 1,
    logo: Logo,
    title: "August Meetup",
    date: "August 2019",
    venue: "Venue TBA",
    replay: null,
  },
  {
    id: 2,
    logo: Logo,
    title: "July Meetup",
    date: "18 July 2019, 6:00–10:00 pm",
    venue:
      "SplitmediaLabs Philippines, Inc. 86 Eulogio Rodriguez Jr. Avenue, Quezon City",
    replay: true,
  },
  {
    id: 3,
    logo: Logo,
    title: "June Meetup",
    date: "8 June 2019, 1:00–5:00 pm",
    venue:
      "7/F Launchpad Building, Reliance cor. Sheridan St., Bgy. Highway Hills, Mandaluyong City",
    replay: true,
  },
]

const MeetupSection = () => (
  <Box py={2}>
    <Container>
      <Text
        as="h2"
        fontSize={[4, 5]}
        color="lightBlue"
        fontWeight="bold"
        textAlign="center"
        mb={2}
        sx={{ textTransform: "uppercase" }}
      >
        Monthly Meetups
      </Text>

      <Box
        sx={{
          display: "grid",
          gridGap: "2rem",
          gridTemplateColumns: ["auto", `repeat(auto-fit, minmax(256px, 1fr))`],
        }}
      >
        {meetups.map(({ id, logo, title, date, venue, replay }) => (
          <Flex key={id} flexDirection="column" color="darkblue" px={1} mt={1}>
            <Image
              src={logo}
              alt={title}
              width="12.5rem"
              mx="auto"
              mb={2}
              display="block"
            />

            <Flex bg="white" p={1} flexDirection="column" flex={1}>
              <Box flex={1}>
                <Flex alignItems="baseline" fontWeight="bold" fontSize={2}>
                  <Link href="/">{title}</Link>
                  <Text ml="0.5rem">›</Text>
                </Flex>
                <Text my="0.25rem">{date}</Text>
                <Text>{venue}</Text>
              </Box>

              <Box mt={2}>
                {!replay ? (
                  <>
                    <Button variant="outline" mr={1}>
                      △ Sponsor
                    </Button>
                    <Button variant="outline">▩ SPEAK</Button>
                  </>
                ) : (
                  <Button variant="outline">◉ Watch</Button>
                )}
              </Box>
            </Flex>
          </Flex>
        ))}
      </Box>
    </Container>
  </Box>
)

export default MeetupSection

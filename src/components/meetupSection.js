import React from "react"
import { Box, Button, Flex, Image, Link, Text } from "rebass"

import theme from "../theme"
import Container from "./container"
import Logo from "../images/logo.svg"

const meetups = [
  {
    id: 1,
    logo: Logo,
    title: "August Meet-up",
    date: "August 2019",
    venue: "Venue TBA",
    replay: null,
  },
  {
    id: 2,
    logo: Logo,
    title: "July Meet-up",
    date: "18 July 2019, 6:00–10:00 pm",
    venue:
      "SplitmediaLabs Philippines, Inc. 86 Eulogio Rodriguez Jr. Avenue, Quezon City",
    replay: true,
  },
  {
    id: 3,
    logo: Logo,
    title: "June Meet-up",
    date: "8 June 2019, 1:00–5:00 pm",
    venue:
      "7/F Launchpad Building, Reliance cor. Sheridan St., Bgy. Highway Hills, Mandaluyong City",
    replay: true,
  },
]

const MeetupSection = () => (
  <Box pb={[7, 9]}>
    <Container>
      <Text
        as="h2"
        fontSize={[4, 5]}
        color="darkBlue"
        fontWeight="bold"
        textAlign="center"
        lineHeight="heading"
        mb={[2, 3]}
        sx={{
          textTransform: "uppercase",
          textShadow: `
            -1px -1px 0 ${theme.colors.lightBlue},  
            1px -1px 0 ${theme.colors.lightBlue},
            -1px 1px 0 ${theme.colors.lightBlue},
            1px 1px 0 ${theme.colors.lightBlue},
            2px 2px 0 ${theme.colors.lightBlue},
            3px 3px 0 ${theme.colors.lightBlue},
            4px 4px 0 ${theme.colors.lightBlue},
            5px 5px 0 ${theme.colors.lightBlue}
          `,
        }}
      >
        Community Meet‑ups
      </Text>

      <Box
        sx={{
          display: "grid",
          gridGap: "3rem 2rem",
          gridTemplateColumns: [
            "auto",
            null,
            `repeat(auto-fit, minmax(25em, 1fr))`,
          ],
        }}
      >
        {meetups.map(({ id, logo, title, date, venue, replay }) => (
          <Flex
            key={id}
            flexDirection="column"
            width="100%"
            maxWidth="30em"
            color="darkblue"
            mt={2}
            mx="auto"
          >
            <Image
              src={logo}
              alt={title}
              width="12.5rem"
              mx="auto"
              mb={3}
              display="block"
            />

            <Flex
              bg="white"
              p={2}
              flexDirection="column"
              flex={1}
              sx={{
                boxShadow: "main",
                transition: "200ms transform",
                "&:hover": {
                  transform: "translateY(-0.5rem)",
                },
              }}
            >
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
                    <Button variant="outline" mt="1">
                      ▩ SPEAK
                    </Button>
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

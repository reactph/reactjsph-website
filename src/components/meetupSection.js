import React, { Fragment } from "react"
import { Box, Button, Flex, Text } from "rebass"
import nanoid from "nanoid"
import { format } from "date-fns"

import theme from "../theme"
import Container from "./container"

const generateId = () => nanoid(5)

const formatDate = date => format(new Date(date), "dd MMM yyyy")

// Date must in YYYY-MM-DD format
const meetups = {
  upcoming: [
    {
      id: generateId(),
      title: "Testing and Architecture",
      date: "2020-03-19",
      venue: "Taguig",
      rsvp: "",
      link: "",
    },
  ],
  past: [
    {
      id: generateId(),
      title: "React JS Meetup #7",
      date: "2020-01-30",
      venue: "iRipple / Pasig",
      link: "https://facebook.com/events/542679469665255/",
    },
    {
      id: generateId(),
      title: "React JS Meetup #6",
      date: "2019-11-19",
      venue: "23F Lake Taal and Sebu W City Center, BGC, Taguig",
      link: "https://facebook.com/events/567713373977346/",
    },
    {
      id: generateId(),
      title: "React JS Meetup #5",
      date: "2019-10-19",
      venue: "Orange & Bronze Software Labs / Makati",
      link: "https://facebook.com/events/2972154692814904/",
    },
  ],
}

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

      {Object.keys(meetups).map(event => (
        <Fragment key={event}>
          <Text
            as="h3"
            fontSize={[2, 3]}
            color="white"
            fontWeight="heading"
            mb={2}
            sx={{ textTransform: "uppercase" }}
          >
            {event}
          </Text>

          <Box as="ul">
            {meetups[event].map(({ id, title, date, venue, rsvp, link }) => (
              <Flex
                key={id}
                as="li"
                bg="white"
                p={2}
                mb={2}
                color="darkBlue"
                alignItems={["start", "center"]}
                flexDirection={["column", "row"]}
              >
                <Box
                  as="time"
                  dateTime={date}
                  pr={2}
                  mr={2}
                  sx={{
                    textTransform: "uppercase",
                    borderRightWidth: "1px",
                    borderRightStyle: "solid",
                    borderRightColor: ["transparent", "darkBlue"],
                  }}
                >
                  {formatDate(date)}
                </Box>

                <Box flex={1} pt={[1, 0]} pb={[2, 0]}>
                  <Text
                    as="h4"
                    fontSize={[2, 3]}
                    fontWeight="heading"
                    sx={{ textTransform: "uppercase" }}
                  >
                    {title}
                  </Text>
                  <Text>{venue}</Text>
                </Box>

                <div>
                  {rsvp && (
                    <Button
                      as="a"
                      href={rsvp}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      mr={1}
                    >
                      ✛ RSVP
                    </Button>
                  )}

                  <Button
                    as="a"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                  >
                    ↗ Open
                  </Button>
                </div>
              </Flex>
            ))}
          </Box>

          {event === "upcoming" && (
            <Box
              as="hr"
              my={3}
              mx="auto"
              sx={{ borderColor: "white", height: "2px", maxWidth: "170px" }}
            />
          )}
        </Fragment>
      ))}

      <Box textAlign="center" mt={3}>
        <Button
          as="a"
          href="https://facebook.com/reactjsphilippines/events/"
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          mx="auto"
        >
          More on Facebook
        </Button>
      </Box>
    </Container>
  </Box>
)

export default MeetupSection

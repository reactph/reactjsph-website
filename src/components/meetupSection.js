import React, { useEffect } from "react"
import { Box, Button, Text } from "rebass"
import { isFuture, isPast, parseISO } from "date-fns"

import theme from "../theme"
import Container from "./container"
import MeetupEventCard from "./meetupEventCard"
import useFacebookPageEventQuery from "../hooks/useFacebookPageQuery"

const FACEBOOK_PAGE_ID = "431794124327063" // ReactJS PH Facebook Page ID

const MeetupSection = () => {
  const { data, callApi } = useFacebookPageEventQuery()

  useEffect(() => {
    callApi(FACEBOOK_PAGE_ID)
  }, [callApi])

  if (!data) {
    return <></>
  }

  const events = data?.events?.data || []
  const upcomingEvents = events.filter(event =>
    isFuture(parseISO(event.start_time))
  )
  const pastEvents = events.filter(event => isPast(parseISO(event.start_time)))

  return (
    <Box pb={[7, 9]}>
      <Container>
        <Text
          as="h2"
          fontSize={[4, 5]}
          color="darkBlue"
          fontWeight="bold"
          textAlign="center"
          lineHeight="heading"
          mb={[3, 4]}
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

        {upcomingEvents.length >= 1 && (
          <>
            <Text
              as="h3"
              fontSize={[2, 3]}
              color="white"
              fontWeight="heading"
              mb={2}
              sx={{ textTransform: "uppercase" }}
            >
              Upcoming
            </Text>

            <Box as="ul">
              {upcomingEvents.map(event => (
                <MeetupEventCard key={event.id} event={event} />
              ))}
            </Box>

            <Box
              as="hr"
              my={3}
              mx="auto"
              sx={{ borderColor: "white", height: "2px", maxWidth: "170px" }}
            />

            <Text
              as="h3"
              fontSize={[2, 3]}
              color="white"
              fontWeight="heading"
              mb={2}
              sx={{ textTransform: "uppercase" }}
            >
              Past
            </Text>
          </>
        )}

        <Box as="ul">
          {/* display only the first three past events */}
          {pastEvents.splice(0, 3).map(event => (
            <MeetupEventCard key={event.id} event={event} />
          ))}
        </Box>

        <Box textAlign="center" mt={3}>
          <Button
            as="a"
            href="https://facebook.com/reactjsphilippines/events/"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            mx="auto"
          >
            ↗ More on Facebook
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default MeetupSection

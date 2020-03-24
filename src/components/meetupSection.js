/* eslint-disable camelcase */
import React from "react"
import { Box, Button, Flex, Text } from "rebass"
import { format } from "date-fns"
import { useStaticQuery, graphql } from "gatsby"

import theme from "../theme"
import Container from "./container"

const formatDate = date => format(new Date(date), "dd MMM yyyy")

const facebookEventQuery = graphql`
  query FacebookEventQuery {
    facebook {
      events {
        data {
          id
          name
          start_time
          place {
            name
            location {
              city
            }
          }
        }
      }
    }
  }
`

const MeetupSection = () => {
  const {
    facebook: {
      events: { data },
    },
  } = useStaticQuery(facebookEventQuery)

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

        {data.map(({ id, name, start_time, place }) => (
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
              dateTime={start_time}
              pr={2}
              mr={2}
              fontSize={[1, 2]}
              sx={{
                textTransform: "uppercase",
                borderRightWidth: "1px",
                borderRightStyle: "solid",
                borderRightColor: ["transparent", "darkBlue"],
              }}
            >
              {formatDate(start_time)}
            </Box>

            <Box flex={1} pt={[1, 0]} pb={[2, 0]} mr={[0, 2]}>
              <Text
                as="h4"
                fontSize={[2, 3]}
                fontWeight="heading"
                sx={{ textTransform: "uppercase" }}
              >
                {name}
              </Text>
              <Text>{`${place.name}, ${place.location &&
                place.location.city}`}</Text>
            </Box>

            <Button
              as="a"
              href={`https://facebook.com/events/${id}/`}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              mr="6px"
              mb="6px"
            >
              ↗ Open
            </Button>
          </Flex>
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
}

export default MeetupSection

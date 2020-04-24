import React from "react"
import PropTypes from "prop-types"
import { Box, Button, Flex, Text } from "rebass"
import { format } from "date-fns"

const formatDate = date => format(new Date(date.split("T")[0]), "dd MMM yyyy")

const MeetupEventCard = ({ event }) => {
  const { id, name, start_time, place } = event
  const city = place?.location?.city

  return (
    <Flex
      as="li"
      bg="white"
      p={2}
      mb={2}
      color="darkBlue"
      alignItems={["start", null, "center"]}
      flexDirection={["column", null, "row"]}
      sx={{
        cursor: "pointer",
        transition: "transform 200ms",
        ":hover": {
          transform: "translateY(-0.25rem)",
        },
      }}
    >
      <Box
        as="time"
        dateTime={start_time}
        pr={2}
        mr={2}
        fontSize={[1, null, 2]}
        sx={{
          textTransform: "uppercase",
          borderRightWidth: "1px",
          borderRightStyle: "solid",
          borderRightColor: ["transparent", null, "darkBlue"],
        }}
      >
        {formatDate(start_time)}
      </Box>

      <Box flex={1} pt={[1, null, 0]} pb={[2, null, 0]} mr={[0, null, 2]}>
        <Text
          as="h4"
          fontSize={[2, null, 3]}
          fontWeight="heading"
          sx={{ textTransform: "uppercase" }}
        >
          {name}
        </Text>
        <Text>{`${place?.name ?? ""}${city ? `, ${city}` : ""}`}</Text>
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
  )
}

MeetupEventCard.propTypes = {
  event: PropTypes.instanceOf(Object).isRequired,
}

export default MeetupEventCard

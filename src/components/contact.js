import React from "react"
import PropTypes from "prop-types"
import { Box, Text, Button } from "rebass"
import Container from "./container"
import { generate3dShadow } from "../utils"

const Contact = () => (
  <Box backgroundColor="darkBlue">
    <Container>
      <Text
        fontSize={[4, 5]}
        fontWeight="bold"
        color="lightBlue"
        mb={3}
        maxWidth="51rem"
        width="100%"
        sx={{
          textTransform: "uppercase",
          textShadow: "main",
        }}
      >
        Sponsor A meet-up{" "}
        <Text as="span" color="gold">
          or just get in touch.
        </Text>
      </Text>

      <form>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: ["auto", `repeat(3, 1fr)`],
            gridTemplateRows: ["1fr", "auto 1fr"],
            gridColumnGap: "2rem",
            gridRowGap: "2rem",
          }}
          mb={2}
        >
          <Box sx={{ gridArea: ["auto", "1 / 1 / 2 / 2"] }}>
            <FormInput name="Name" label="Name" type="text" />
          </Box>
          <Box sx={{ gridArea: ["auto", "2 / 1 / 3 / 2"] }}>
            <FormInput name="Email" label="Email" type="text" />
          </Box>
          <Box sx={{ gridArea: ["auto", " 1 / 2 / 3 / 4"] }}>
            <FormInput name="Message" label="Message" type="textarea" />
          </Box>
        </Box>
        <Box textAlign="right">
          <Button variant="primary" type="submit">
            Send »
          </Button>
        </Box>
      </form>
    </Container>
  </Box>
)

const FormInput = ({ name, label, type }) => (
  <Box
    sx={{
      label: {
        display: "block",
      },
      "input, textarea": {
        width: "100%",
        outline: 0,
        borderWidth: 3,
        borderColor: "white",
        borderStyle: "solid",
        backgroundColor: "transparent",
        boxShadow: theme => generate3dShadow(5, theme.colors.white),
        boxSizing: "border-box",
        color: "white",
        fontSize: 1,
        padding: 1,
        ":focus, :active": {
          borderColor: "lightBlue",
        },
      },

      textarea: {
        height: "14.8rem",
      },
    }}
  >
    <label htmlFor={name}>
      <Text
        color="white"
        fontWeight="bold"
        mb={0}
        sx={{ textTransform: "uppercase" }}
      >
        {label}
      </Text>
      {type === "textarea" && <textarea name={name} />}
      {type !== "textarea" && <input name={name} type={type} />}
    </label>
  </Box>
)

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default Contact

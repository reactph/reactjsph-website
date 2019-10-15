import React from "react"
import PropTypes from "prop-types"
import { Box, Text } from "rebass"
import Container from "./container"
import { generate3dShadow } from "./hero"

const Contact = () => {
  return (
    <Box backgroundColor="darkBlue" py={1}>
      <Container>
        <Text
          fontSize={6}
          fontWeight="bold"
          color="lightBlue"
          mb={2}
          maxWidth="51rem"
          width="100%"
          sx={{
            textTransform: "uppercase",
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
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "repeat(2, auto)",
              gridColumnGap: "1.33rem",
              gridRowGap: "1.33rem",
            }}
          >
            <Box sx={{ gridArea: "1 / 1 / 2 / 2" }}>
              <FormInput name="Name" label="Name" type="text" required />
            </Box>
            <Box sx={{ gridArea: "2 / 1 / 3 / 2" }}>
              <FormInput name="Email" label="Email" type="text" required />
            </Box>
            <Box sx={{ gridArea: "1 / 2 / 3 / 4" }}>
              <FormInput
                name="Message"
                label="Message"
                type="textarea"
                required
              />
            </Box>
          </Box>
        </form>
      </Container>
    </Box>
  )
}

const FormInput = ({ name, label, type, required }) => (
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
      {type === "textarea" && <textarea name={name} required={required} />}
      {type !== "textarea" && (
        <input name={name} type={type} required={required} />
      )}
    </label>
  </Box>
)

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
}

FormInput.defaultProps = {
  required: false,
}

export default Contact

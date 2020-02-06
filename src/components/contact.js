import React, { useRef, useState } from "react"
import PropTypes from "prop-types"
import { Box, Text, Button } from "rebass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons"
import { Formik } from "formik"
import * as yup from "yup"
import Recaptcha from "react-google-recaptcha"
import useIntersectionObserver from "@react-hook/intersection-observer"
import Container from "./container"
import Portal from "./portal"
import MessageSentModal from "./messageSentModal"
import { generate3dShadow } from "../utils"

const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY

const contactFormValidationSchema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .required("Please enter your email address")
    .email("Please enter your email address in format: yourname@example.com"),
  message: yup.string().required("Please enter your message"),
})

const encode = data => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&")
}

const Contact = () => {
  const recaptchaRef = useRef(null)
  const [showModal, setShowModal] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [entry, observerRef] = useIntersectionObserver({
    threshold: 0.5,
  })

  const handleFormSubmit = values => {
    setSubmitting(true)
    recaptchaRef.current.execute()
    const recaptchaValue =
      (recaptchaRef &&
        recaptchaRef.current &&
        recaptchaRef.current.getValue()) ||
      null

    const data = {
      "form-name": "contact",
      "g-recaptcha-response": recaptchaValue,
      ...values,
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(data),
    })
      .then(() => {
        recaptchaRef.current.reset()
        setShowModal(true)
      })
      .catch(() => {})
      .finally(() => {
        setSubmitting(false)
      })
  }

  return (
    <Box ref={observerRef} backgroundColor="darkBlue" py={4}>
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
          }}
        >
          Sponsor A meet-up{" "}
          <Text as="span" color="gold">
            or just get in touch.
          </Text>
        </Text>

        <form name="contact" netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message" />
        </form>

        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={contactFormValidationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ values, handleSubmit, handleChange, touched, errors }) => (
            <form onSubmit={handleSubmit}>
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
                  <FormInput
                    name="name"
                    label="Name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    error={touched.name && errors.name}
                  />
                </Box>
                <Box sx={{ gridArea: ["auto", "2 / 1 / 3 / 2"] }}>
                  <FormInput
                    name="email"
                    label="Email"
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                    error={touched.email && errors.email}
                  />
                </Box>
                <Box sx={{ gridArea: ["auto", " 1 / 2 / 3 / 4"] }}>
                  <FormInput
                    name="message"
                    label="Message"
                    type="textarea"
                    value={values.message}
                    onChange={handleChange}
                    error={touched.message && errors.message}
                  />
                </Box>
              </Box>

              <Box textAlign="right">
                <Button variant="primary" type="submit" disabled={submitting}>
                  {submitting ? (
                    <FontAwesomeIcon icon={faCircleNotch} spin />
                  ) : (
                    `Send »`
                  )}
                </Button>
              </Box>

              <Box
                sx={{
                  display: entry && entry.isIntersecting ? "block" : "none",
                }}
              >
                <Recaptcha
                  ref={recaptchaRef}
                  size="invisible"
                  sitekey={RECAPTCHA_KEY}
                />
              </Box>
            </form>
          )}
        </Formik>
      </Container>
      <Portal show={showModal} setShow={setShowModal}>
        <MessageSentModal />
      </Portal>
    </Box>
  )
}

const FormInput = ({ name, label, type, value, onChange, error }) => (
  <Box
    sx={{
      label: {
        display: "block",
      },
      small: {
        color: "tomato",
        fontSize: "0.75rem",
      },
      "input, textarea": {
        width: "100%",
        outline: 0,
        borderWidth: 3,
        borderColor: error ? "tomato" : "white",
        borderStyle: "solid",
        backgroundColor: "transparent",
        boxShadow: theme =>
          generate3dShadow(5, error ? theme.colors.tomato : theme.colors.white),
        boxSizing: "border-box",
        color: error ? "tomato" : "white",
        fontSize: 1,
        padding: 1,
        ":focus, :active": {
          borderColor: "lightBlue",
        },
      },

      textarea: {
        height: "14.8rem",
        resize: "none",
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
        {label} <small>{error}</small>
      </Text>
      {type === "textarea" && (
        <textarea name={name} value={value} onChange={onChange} />
      )}
      {type !== "textarea" && (
        <input name={name} type={type} value={value} onChange={onChange} />
      )}
    </label>
  </Box>
)

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default Contact

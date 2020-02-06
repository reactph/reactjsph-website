import React from "react"
import { createPortal } from "react-dom"
import { Box } from "rebass"
import PropTypes from "prop-types"

const Portal = ({ children, show, setShow }) => {
  const closePortal = () => setShow(false)
  const content = show && (
    <Box onClick={closePortal}>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "black",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0.5,
          zIndex: 9999,
        }}
      />
      {children}
    </Box>
  )
  return typeof document !== `undefined`
    ? createPortal(content, document.body)
    : null
}

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool,
  setShow: PropTypes.func.isRequired,
}

export default Portal

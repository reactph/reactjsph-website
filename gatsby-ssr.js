import React from "react"
import RootElement from "./src/root-element"

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => (
  <RootElement>{element}</RootElement>
)

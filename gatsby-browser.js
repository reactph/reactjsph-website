import React from "react"
import RootElement from "./src/root-element"

export const wrapRootElement = ({ element }) => (
  <RootElement>{element}</RootElement>
)

import React from "react"

const FbTokenRequiredBoundary = () => {
  // eslint-disable-next-line no-console
  console.error(`Exported env variable FACEBOOK_GRAPH_TOKEN is needed for this component to render. 
  Check https://developers.facebook.com/docs/facebook-login/access-tokens/ for more information`)

  return <></>
}

export default FbTokenRequiredBoundary

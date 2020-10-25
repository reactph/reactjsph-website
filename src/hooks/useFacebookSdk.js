/* eslint-disable no-console */
const { useState, useEffect } = require("react")
const { loadScript } = require("../utils")

const useFacebookSdk = () => {
  const [isFbReady, setIsFbReady] = useState(false)
  const [fbSdkError, setFbSdkError] = useState(null)

  useEffect(() => {
    const loadFbSDK = async () => {
      try {
        await loadScript(`https://connect.facebook.net/en_US/sdk.js`)
        // eslint-disable-next-line no-undef
        FB.init({
          plugins: [],
          appId: "978828789265580",
          autoLogAppEvents: true,
          xfbml: true,
          version: "v8.0",
        })
        setIsFbReady(true)
      } catch (e) {
        console.log("Something went wrong in loading the fb sdk.")
        console.error(e)
        setFbSdkError(e)
      }
    }
    loadFbSDK()
  }, [setIsFbReady, setFbSdkError])

  return { isFbReady, fbSdkError }
}

export default useFacebookSdk

import { useState, useEffect } from "react"

export const generate3dShadow = (size, color) => {
  let result = []
  for (let i = size; i > 0; i -= 1) {
    result = [...result, `${i}px ${i}px ${color}`]
  }
  return result.join()
}

export const useWindowSize = () => {
  const isClient = typeof window === "object"

  const getSize = () => ({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  })

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) {
      return false
    }

    const handleResize = () => {
      setWindowSize(getSize())
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return windowSize
}

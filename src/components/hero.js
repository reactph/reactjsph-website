import React, { useEffect, useRef, useState } from "react"
import { Box, Text, Button, Flex } from "rebass"
import { fabric } from "fabric"

import theme from "../theme"
import { heroImg, brandmarkPath } from "../images"
import Container from "./container"

const getScaledHeroImage = (canvas, imageEl) => {
  const heroImage = new fabric.Image(imageEl)
  const canvasRatio = canvas.width / canvas.height
  const imageRatio = imageEl.width / imageEl.height

  if (imageRatio > canvasRatio) {
    heroImage.scaleToHeight(canvas.height)
  } else {
    heroImage.scaleToWidth(canvas.width)
  }

  return heroImage
}

const rotatePath = (path, midpoint, { point, angle }) => {
  const rotatePoint = fabric.util.rotatePoint(
    point,
    new fabric.Point(midpoint.x + point.x, midpoint.y + point.y),
    fabric.util.degreesToRadians(angle)
  )
  path.set({
    top: rotatePoint.y,
    left: rotatePoint.x,
    angle,
  })
}

const drawRotatingBrandmark = (canvas, heroImageTemplate) => {
  const heroImage = fabric.util.object.clone(heroImageTemplate)

  const clipPath = new fabric.Path(brandmarkPath)
  clipPath.absolutePositioned = true
  clipPath.scale((1.2 * canvas.height) / clipPath.height)

  const ANIMATION_TIME = 60 * 1000
  const INITIAL_ANGLE = -15
  const clipPathMidpoint = new fabric.Point(
    500 * clipPath.getObjectScaling().scaleX,
    581.9 * clipPath.getObjectScaling().scaleY
  )
  let startTimestamp = 0
  let angle = INITIAL_ANGLE

  const drawClip = timestamp => {
    if (window.innerWidth === canvas.width) {
      fabric.util.requestAnimFrame(drawClip)
    } else {
      canvas.clear()
    }

    rotatePath(clipPath, clipPathMidpoint, {
      point: new fabric.Point(
        (canvas.width / 4) * 3 - clipPath.getScaledWidth() / 2,
        -(canvas.height / 4)
      ),
      angle,
    })

    const progress = (timestamp - startTimestamp) / ANIMATION_TIME
    angle = -progress * 360 + INITIAL_ANGLE

    canvas.remove(heroImage)
    heroImage.clipPath = clipPath
    canvas.add(heroImage)

    heroImage.dirty = true
    heroImage.center()
  }
  fabric.util.requestAnimFrame(timestamp => {
    startTimestamp = timestamp
    drawClip(timestamp)
  })
}

const drawHeroBg = (canvas, imageEl) => {
  const heroImage = getScaledHeroImage(canvas, imageEl)
  drawRotatingBrandmark(canvas, heroImage)

  const heroBg = fabric.util.object.clone(heroImage)
  heroBg.set({ opacity: 0.2 })
  canvas.add(heroBg)
  heroBg.center()
}

const Hero = () => {
  const canvasContainerRef = useRef(null)
  const canvasRef = useRef(null)
  const [imageEl, setImageEl] = useState(null)

  const initializeCanvas = () => {
    const { clientWidth, clientHeight } = canvasContainerRef.current
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: clientWidth,
      height: clientHeight,
    })

    return canvas
  }

  useEffect(() => {
    const canvas = initializeCanvas()
    const emptyImageEl = new Image()
    emptyImageEl.src = heroImg

    const handleImageLoad = ({ target: loadedImageEl }) => {
      setImageEl(loadedImageEl)
      drawHeroBg(canvas, loadedImageEl)
    }

    emptyImageEl.addEventListener("load", handleImageLoad)

    return () => emptyImageEl.removeEventListener(handleImageLoad)
  }, [])

  useEffect(() => {
    const handleWindowResize = () => {
      const canvas = initializeCanvas()
      drawHeroBg(canvas, imageEl)
    }

    if (imageEl) {
      window.addEventListener("resize", handleWindowResize)
    }

    return () => window.removeEventListener("resize", handleWindowResize)
  }, [imageEl])

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "125vh",
        mt: "-105px",
        mb: 4,
        "&::after": {
          display: "block",
          position: "relative",
          width: "100%",
          height: "101%",
          background: `linear-gradient(transparent 60%, ${
            theme.colors.darkBlue
          })`,
          content: "''",
        },
      }}
    >
      <Box
        ref={canvasContainerRef}
        width="100%"
        height="100%"
        sx={{ position: "absolute" }}
      >
        <Box as="canvas" ref={canvasRef} />
      </Box>
      <Flex
        alignItems="center"
        css={{
          position: "absolute",
          top: [0, "-5vh"],
          left: 0,
          width: "100%",
          height: "100%",
          lineHeight: 1,
          zIndex: 1,
        }}
      >
        <Container mb="25vh">
          <Box sx={{ textShadow: "main" }}>
            <Text
              display="flex"
              alignItems="center"
              fontSize={[4, 5]}
              color="gold"
              fontWeight="body"
              zIndex={2}
              mb={1}
              sx={{
                ":after": {
                  display: "block",
                  content: "''",
                  width: "35%",
                  height: "2px",
                  backgroundColor: "gold",
                  ml: [2, 3],
                },
              }}
            >
              ★ ★ ★
            </Text>
            <Text
              fontSize={[5, 6, 7]}
              fontWeight="hero"
              color="white"
              zIndex={2}
            >
              WE ARE
            </Text>
            <Text
              fontSize={[4, 5, 6]}
              fontWeight="hero"
              color="lightBlue"
              zIndex={2}
            >
              REACTJS
            </Text>
            <Text
              fontSize={[4, 5, 6]}
              fontWeight="hero"
              color="gold"
              zIndex={2}
            >
              PHILIPPINES
            </Text>
          </Box>
          <Button
            sx={{
              marginTop: [2, 3],
              py: [1, 2],
              px: [2, 3],
              fontSize: [1, 2],
            }}
          >
            JOIN THE COMMUNITY
          </Button>
        </Container>
      </Flex>
    </Box>
  )
}

export default Hero

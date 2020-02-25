import React, { useEffect, useRef, useState } from "react"
import { Box } from "rebass"
import { fabric } from "fabric"
import debounce from "lodash.debounce"

import { heroImg, brandmarkPath } from "../images"

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

  const initialWindowWidth = window.innerWidth
  const initialWindowHeight = window.innerHeight

  const didWindowResize = window =>
    window.innerWidth !== initialWindowWidth ||
    window.innerHeight !== initialWindowHeight

  const drawClip = timestamp => {
    if (!didWindowResize(window)) {
      fabric.util.requestAnimFrame(drawClip)
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

const HeroCanvas = () => {
  const canvasContainerRef = useRef(null)
  const [imageEl, setImageEl] = useState(null)

  const initializeCanvas = () => {
    const { clientWidth, clientHeight } = canvasContainerRef.current
    const canvas = document.createElement("canvas")
    canvasContainerRef.current.innerHTML = ""
    canvasContainerRef.current.appendChild(canvas)

    return new fabric.Canvas(canvas, {
      width: clientWidth,
      height: clientHeight,
    })
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

    return () => emptyImageEl.removeEventListener("load", handleImageLoad)
  }, [])

  useEffect(() => {
    const handleWindowResize = debounce(() => {
      const canvas = initializeCanvas()
      drawHeroBg(canvas, imageEl)
    }, 150)

    if (imageEl) {
      window.addEventListener("resize", handleWindowResize)
    }

    return () => window.removeEventListener("resize", handleWindowResize)
  }, [imageEl])

  return (
    <Box
      ref={canvasContainerRef}
      width="100%"
      height="100%"
      sx={{ position: "absolute" }}
    />
  )
}

export default HeroCanvas

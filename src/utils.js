export const generate3dShadow = (size, color) => {
  let result = []
  for (let i = size; i > 0; i -= 1) {
    result = [...result, `${i}px ${i}px ${color}`]
  }
  return result.join()
}

export const loadScript = src =>
  new Promise((resolve, reject) => {
    const script = document.createElement("script")
    script.src = src
    script.addEventListener("load", () => {
      resolve()
    })
    script.addEventListener("error", e => {
      reject(e)
    })
    document.body.appendChild(script)
  })

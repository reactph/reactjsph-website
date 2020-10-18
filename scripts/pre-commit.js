const { spawnSync } = require("child_process")

const result = spawnSync("yarn validate", { stdio: "inherit", shell: true })

if (result.status !== 0) {
  process.exit(result.status)
}

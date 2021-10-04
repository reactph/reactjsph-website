/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const fs = require("fs")
const Joi = require("joi")
const { spawnSync } = require("child_process")

const result = spawnSync("yarn lint", { stdio: "inherit", shell: true })

if (result.status !== 0) {
  process.exit(result.status)
}

const validateJson = (dir, schema) => {
  fs.readdir(dir, (err, files) => {
    if (err) {
      throw err
    }

    files.forEach(async file => {
      const json = JSON.parse(fs.readFileSync(`${dir}${file}`, "utf8"))

      try {
        await schema.validateAsync(json)
      } catch (error) {
        console.log(`${file} has invalid details`)
        console.log(error.details)
        process.exit(1)
      }
    })
  })
}

const contentJsons = [
  {
    dir: `${__dirname}/../content/devs/`,
    schema: Joi.object({
      avatar: Joi.string()
        .uri()
        .required(),
      name: Joi.string()
        .max(50)
        .required(),
      title: Joi.string()
        .max(50)
        .required(),
      company: Joi.string()
        .max(50)
        .optional(),
      blurb: Joi.string()
        .max(140)
        .required(),
      skills: Joi.array()
        .items(Joi.string().max(15))
        .min(1)
        .required(),
      contacts: Joi.array().items(
        Joi.object().keys({
          type: Joi.string()
            .valid(
              "website",
              "github",
              "linkedin",
              "email",
              "behance",
              "twitter"
            )
            .required(),
          url: Joi.string()
            .uri()
            .required(),
        })
      ),
    }),
  },
  {
    dir: `${__dirname}/../content/projects/`,
    schema: Joi.object({
      name: Joi.string()
        .max(50)
        .required(),
      author: Joi.string()
        .max(50)
        .required(),
      description: Joi.string()
        .max(280)
        .required(),
      homepage: Joi.string()
        .uri()
        .required(),
      tags: Joi.array()
        .items(Joi.string().max(50))
        .min(1)
        .optional(),
      pinned: Joi.boolean().optional(),
    }),
  },
]

contentJsons.map(({ dir, schema }) => validateJson(dir, schema))

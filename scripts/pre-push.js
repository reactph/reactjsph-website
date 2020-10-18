/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const fs = require("fs")

const Joi = require("joi")

const devList = JSON.parse(
  fs.readFileSync(`${__dirname}/../content/devs.json`, "utf8")
)

const schema = Joi.object({
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
    .required(),
  blurb: Joi.string()
    .max(140)
    .required(),
  skills: Joi.array()
    .items(Joi.string())
    .max(5)
    .min(1),
  contacts: Joi.array().items(
    Joi.object().keys({
      type: Joi.string()
        .valid("website", "github", "linkedin", "email")
        .required(),
      url: Joi.string()
        .uri()
        .required(),
    })
  ),
})

devList.forEach(async dev => {
  try {
    await schema.validateAsync(dev)
  } catch (err) {
    console.log(`${dev.name} has invalid details on devs.json`)
    console.log(err.details)
    process.exit(1)
  }
})

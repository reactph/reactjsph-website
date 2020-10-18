/* eslint-disable no-console */
const fs = require("fs")

const Joi = require("@hapi/joi")

const devList = JSON.parse(fs.readFileSync("file", "utf8"))

const schema = Joi.object().keys({
  avatar: Joi.link().required(),
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
      url: Joi.link().required(),
    })
  ),
})

devList.forEach(dev => {
  Joi.validate(dev, schema, err => {
    if (err) {
      console.log(`${dev.name} has invalid details on devs.json`)
      console.log(err.details)
    }
  })
})

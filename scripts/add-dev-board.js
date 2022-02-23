/* eslint-disable no-console */
const inquirer = require("inquirer")
const { promises: fs } = require("fs")
const path = require("path")

const CONTACT_TYPES = [
  "behance",
  "email",
  "github",
  "linkedin",
  "twitter",
  "website",
]

const FIELD_EMPTY_MESSAGE = "Field Required."
const FIELD_INVALID_URL = "Invalid URL."
const FIELD_MAX_LENGTH = "Field must be 140 characters or less"

const isFieldEmpty = input => !input?.length
const isFieldURL = input =>
  new RegExp(
    /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
  ).test(input)
const isFieldMaxLength = input => input.length > 140

const askSkills = async (skills = []) => {
  let newSkills = [...skills]
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "skill",
      message: `Add skill/technology #${newSkills.length + 1}`,
    },
  ])

  if (answers.skill?.length) {
    newSkills = [...newSkills, answers.skill]
    return askSkills(newSkills)
  }

  return newSkills
}

const askContacts = async (contacts = []) => {
  const { type } = await inquirer.prompt([
    {
      type: "list",
      name: "type",
      choices: [
        ...CONTACT_TYPES,
        `I don't want to add ${contacts?.length ? "another" : "a"} contact`,
      ],
      message: `Choose${contacts?.length ? " another" : ""} type`,
      default: 0,
    },
  ])

  if (type.includes("I don't want to add")) {
    return contacts
  }

  const { url } = await inquirer.prompt([
    {
      type: "input",
      name: "url",
      message:
        "URL (leave empty if you want to cancel adding this contact type)",
      validate: input => {
        if (isFieldEmpty(input)) {
          return true
        }

        if (!isFieldURL(input)) {
          return FIELD_INVALID_URL
        }

        return true
      },
    },
  ])

  if (!url?.length) {
    return contacts
  }

  return askContacts([...contacts, { type, url }])
}

const addToDevBoard = async () => {
  let data = {}

  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Full Name",
      validate: input => !isFieldEmpty(input) || FIELD_EMPTY_MESSAGE,
    },
    {
      type: "input",
      name: "avatar",
      message:
        "An external URL to an image of yourself (Must be a square image and less than 80 kB)",
      validate: input => {
        if (isFieldEmpty(input)) {
          return FIELD_EMPTY_MESSAGE
        }

        if (!isFieldURL(input)) {
          return FIELD_INVALID_URL
        }

        return true
      },
    },
    {
      type: "input",
      name: "title",
      message: "Current job title",
      validate: input => !isFieldEmpty(input) || FIELD_EMPTY_MESSAGE,
    },
    {
      type: "input",
      name: "company",
      message: "Your current employer (optional)",
    },
    {
      type: "input",
      name: "blurb",
      message: "Short bio describing yourself (140 characters or less)",
      validate: input => {
        if (isFieldEmpty(input)) {
          return FIELD_EMPTY_MESSAGE
        }

        if (isFieldMaxLength(input)) {
          return `${FIELD_MAX_LENGTH} (${input.length} chars.)`
        }

        return true
      },
    },
  ])

  console.log(`
Add skills/technologies that you would like to promote
* Only the first 5 will be listed, but feel free to add as many as you like as we plan to allow devs to be filtered by skills in the future
* Leave blank if you're done adding items
  `)

  const skills = await askSkills()

  console.log("\nAdd contact information\n")

  const contacts = await askContacts()

  data = {
    ...answers,
    skills,
    contacts: contacts.map(contact => {
      if (contact.type === "email" && !contact.url.includes("mailto:")) {
        return {
          ...contact,
          url: `mailto:${contact.url}`,
        }
      }

      return contact
    }),
    company: answers.company?.length ? answers.company : undefined,
  }

  const fileName = `${answers.name
    .toLowerCase()
    .split(".")
    .join("")
    .split(" ")
    .join("-")}.json`
  const filePath = path.join(__dirname, `../content/devs/${fileName}`)
  console.log(`\n\nCreating JSON file ${fileName} with content`)
  console.log(data)

  try {
    await fs.stat(filePath)

    const { confirm } = await inquirer.prompt([
      {
        name: "confirm",
        type: "confirm",
        message: `A file with name ${fileName} already exists. Do you want to overwrite this file?`,
        default: false,
      },
    ])

    if (confirm) {
      await fs.unlink(filePath)
    }
  } catch (err) {
    if (err.code !== "ENOENT") {
      console.error(err)
      return
    }
  }

  try {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2))
    console.log(`${answers.name} successfully added to the Dev Board`)
  } catch (err) {
    console.error(err)
  }
}

addToDevBoard()

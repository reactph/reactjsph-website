<div align="center">
  <a href="https://reactjs.org.ph/">
    <img
      width="800"
      alt="ReactJS Philippines"
      src="https://raw.githubusercontent.com/reactph/reactjsph-website/master/static/meta-image-cover.jpg"
    />
  </a>
    <p>We are a group of Filipino developers dedicated to nation-building through our community and shared enthusiasm for React and for excellence overall.</p>
</div>

---

[![Netlify Status](https://api.netlify.com/api/v1/badges/cd5d6330-1628-4d0e-aac1-84f8cf4b7863/deploy-status)](https://app.netlify.com/sites/reactjs-ph-website/deploys)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![GitHub issues](https://img.shields.io/github/issues/reactph/reactjsph-website)](https://github.com/reactph/reactjsph-website/issues)
[![GitHub license](https://img.shields.io/github/license/reactph/reactjsph-website)](https://github.com/reactph/reactjsph-website/blob/master/LICENSE)
[![Code of Conduct](https://img.shields.io/badge/code%20of-conduct-ff69b4.svg)](https://github.com/reactph/reactjsph-website/blob/master/CODE_OF_CONDUCT.md)

[![Facebook Group](https://img.shields.io/badge/join_the_community-on_facebook-1877F2?logo=facebook)][facebook-group]
[![Discord](https://img.shields.io/badge/join_the_community-on_discord-7289DA?logo=discord)][discord]

---

## 🚀 Quick start

1.  **Fork and clone this repo**

2.  **Install dependencies**

    Navigate into the site’s directory and install dependencies.

    ```sh
    cd reactjsph-website/
    yarn
    # or yarn install
    ```

3.  **Start developing**

    ```sh
    yarn start
    # or yarn develop
    ```

4.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `reactjsph-website` directory in your code editor of choice and start developing. Save your changes and the browser will update in real time!

More for information about how you can contribute to this project, check our [contributing guidelines](https://github.com/reactph/reactjsph-website/blob/master/CODE_OF_CONDUCT.md).

## 📋 Enlisting in the Dev Board

1. Add a JSON file to the [`content/devs`](https://github.com/reactph/reactjsph-website/blob/master/content/devs) folder with filename `firstname-lastname.json` (all lowercase, separated by `-`), e.g., `juan-dela-cruz.json`.

2. Within that file, define an object describing yourself given the format below. Here's an [example](https://github.com/reactph/reactjsph-website/blob/master/content/devs/franrey-anthony-saycon.json).

  | Key | Description ||
  |-|-|-|
  | `avatar` | An external URL to an image of yourself | <ul><li>Must be a square image</li><li>Must be less than 80 kB</li></ul> |
  | `name` | Your name |  |
  | `title` | Your current job title |  |
  | `company` | Your current employer | <ul><li>Optional</li></ul> |
  | `blurb` | Short bio describing yourself | <ul><li>Must be 140 characters or less</li></ul> |
  | `skills` | String array of your skills/technologies that you would like to promote | <ul><li>Only the first 5 will be listed, but feel free to add as many as you like (We plan to allow devs to be filtered by skills in the future)</li></ul> |
  | `contacts` | Object array of contact information where each item has a `type` and a `url` | <ul><li>`type` can be any of the following: "behance", "email", "github", "linkedin", "twitter", "website"</li><li>`url` must be a URL corresponding to the `type` selected</li></ul> |

3. Commit your changes with the message `[DEV BOARD] {YOUR_NAME}` and open a pull request with the same title, following the template below:

  ```
  I have read and verified the following upon opening this pull request to add my information to the ReactJS Philippines Dev Board:

  - [ ] My `avatar` is a square image
  - [ ] My `avatar` is below 80 kB
  - [ ] My `blurb` is no longer than 140 characters
  - [ ] I understand that only the first 5 `skills` I list will be shown on the site
  ```

## 🎉 Join the community

- [Facebook Group][facebook-group]
- [Discord][discord]
- [Meetup][meetup]

[facebook-group]: https://web.facebook.com/groups/875676539148789/
[discord]: https://discord.gg/J6eZNUG
[meetup]: https://www.meetup.com/ReactJS-Philippines/

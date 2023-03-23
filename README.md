# Antora Component Template

This project provides an Antora component template (the base file and directory structure of an Antora component), along with some other helpful command-line tools.
The project's aim is to help make it as quick and painless as possible to get up and running with new Antora projects and to add modules (components) to existing Antora projects.

## Installation

**Note:** before working through the installation steps, make sure that you have both [Node] and [NPM] installed.

To use the component template in your project:

- Clone the project locally.
- Run `npm i` to install [the command-line tools](#command-line-tooling).
- Update `antora.yml`, changing the `name`, `title`, and `version` properties making them appropriate to your project.
- Run `npm run lint` to lint `antora.yml` after you've made changes, to ensure that it contains valid YAML.
- Start adding content under `modules/ROOT/pages`.
  An empty default file (`modules/ROOT/pages/index.adoc`) is available, ready for adding initial content.

<a name="command-line-tooling"></a>
## Command-Line Tooling

The project comes with a `package.json` file that provides (at the time of writing) [yaml-lint](https://www.npmjs.com/package/yaml-lint), which you can use for linting `antora.yml`.
To use it, first run `npm i` to install it, and then run `yamllint antora.yml` to lint it.

Additional tooling is intended to be added in future releases.

## Found An Issue?

If you've found an issue with the repository, then create a new issue or create a Pull Request and let's get it fixed.

[Node]: https://nodejs.org/en/download/
[NPM]: https://www.npmjs.com/get-npm
# jenkins-docs

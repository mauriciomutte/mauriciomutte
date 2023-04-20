'use strict'

const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

const user = 'mauriciomutte'

const options = {
  padding: 2,
  margin: 2,
  borderStyle: 'round',
  align: 'center',
}

const data = {
  name: chalk.blue.bold('Maurício Mutte'),
  role: chalk.white('Frontend Software Engineer'),

  blog: chalk.green('https://mauriciomutte.dev'),
  github: chalk.gray('https://github.com/') + chalk.blue(user),
  twitter: chalk.gray('https://twitter.com/') + chalk.blue(user),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue(user),

  labelBlog: chalk.green.bold('Blog:'),
  labelGitHub: chalk.hex('#ffb86c').bold('  GitHub:'),
  labelTwitter: chalk.hex('#ffb86c').bold('  Twitter:'),
  labelLinkedIn: chalk.hex('#ffb86c').bold('    LinkedIn:'),
}

const newline = '\n'

const heading = `${data.name}`
const role = `${data.role}`
const blog = `${data.labelBlog}  ${data.blog}`
const twitter = `${data.labelTwitter}  ${data.twitter}`
const github = `${data.labelGitHub}  ${data.github}`
const linkedin = `${data.labelLinkedIn}  ${data.linkedin}`

const output =
  heading +
  newline +
  role +
  newline +
  newline +
  blog +
  newline +
  newline +
  github +
  newline +
  twitter +
  newline +
  linkedin

fs.writeFileSync(
  path.join(__dirname, 'bin/output'),
  chalk.green(boxen(output, options))
)

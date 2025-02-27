'use strict'

// The following script will generate `./User.md` and `./Post.md` files

const r = require('path').resolve

require('../../dist').generateMarkdownFile({
  apiDocPath: r(__dirname), // Path to apiDoc data directory
  output: r(__dirname, 'output'), // Output path
  template: r(__dirname, '..', '..', 'templates', 'default.md'), // Template path
  prepend: null, // File to preprend documentation with
  multi: true, // Should the documentation be generated one file per group
  createPath: true // Should the path to output path be recursively generated (mkdir -p)
})

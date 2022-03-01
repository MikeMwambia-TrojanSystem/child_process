'use strict'

const { spawn } = require('child_process')

function exercise (command, args) {
  return spawn(command, args,{
    //Ignores stdin
    //Inherits stdout
    //Exposes a stream for stderr
    stdio : ['ignore','inherit',process.stdout]
  })
}

module.exports = exercise
'use strict'

function exercise (myEnvVar) {
  return require('child_process').spawnSync(process.argv[0], ['child.js'],{
    env : {MY_ENV_VAR:myEnvVar}
  })
}

module.exports = exercise



'use strict'
const { spawn } = require('child_process');

function exercise (myEnvVar) {
  return require('child_process').spawn(process.argv[0], ['child.js'],{
    env : {MY_ENV_VAR:myEnvVar}
  })
}

module.exports = exercise

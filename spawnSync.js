'use strict'
const { spawnSync } = require('child_process')
//This returns an object of the spawned process
const result = spawnSync(
    process.execPath,['-e',`console.log('subprocess stdio output')`]
)
console.log(result.stdout.toString())
console.log(result)

/*
Exit with a non-zero it does not throw just returns an object
*/
const resultE = spawnSync(
    process.execPath,[`-e`,`process.exit(1)`]
)
console.log(resultE)


'use strict'
const { execSync } = require('child_process')

//Checks whether the platform is windows or linux
//then chooses which command to run ls or dir to display files
const cmd = process.platform === 'win32' ? 'dir' : 'ls'

//Spawns a child process as long as node js is installed
const output = execSync(cmd)

console.log(output.toString())

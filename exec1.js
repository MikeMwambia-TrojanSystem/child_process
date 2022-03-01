/*
child_process.execSync is the easient way to run a command
*/

'use strict'
const { execSync } = require('child_process');//Child process module
const output = execSync(
    `node -e "console.log('subprocess stdio output')"`
)
console.log(output.toString())

/*
The best way ro execute the node binary as a child process,it's best to refer to full 
path of the node binary of the currently executing Node process.
This can be found with process.execPath i.e node -p process.execPath in terminal
This also ensures no matter what node will be executing the same version of Node
*/



/*
The best way to execute node binary as a child process is to refer to it's full
path using the process.execPath method
This also ensures that node will be executing the same version of Node
*/
'use strict'
const { execSync } = require("child_process")
let output = execSync(
    `"${process.execPath}" -e "console.error('subprocess stdio output')"`
)

console.log(output.toString());

/*
If the process exits with a non zero exit code the error bubles up to the parent process
*/

try {
    execSync(`"${process.execPath}" -e "throw Error('kaboom')"`)
}catch(err){
    console.log(err)
}
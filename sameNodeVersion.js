'use strict'
const { execSync } = require('child_process')
const output = execSync(
    //This ensure it executes on the same node js path
    `"${process.execPath}" -e "console.error('subprocess stdio output')"`
)
console.log(output)
//process.execPath returns the path that the node process is running in
//NB:- Using process.execPath ensures that no matter what it excecutes on the same version of node



//In the below example if the process exits with a non-zero exit code,the execSync function will throw
'use strict'
const { execSync } = require('child_process');
try{
    execSync(`"${process.execPath}" -e "process.exit(1)"`)
}catch(err){
    console.error('CAUGHT ERROR:',err)
}


//In below example it throws an error
'use strict'
const { execSync } = require('child_process')

try{

execSync(`"${process.execPath}" -e "throw Error('kaboom')"`)

}catch(err){

console.error(err)

}
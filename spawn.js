'use strict'
const { spawn } = require('child_process')

//Returns a child process instance
const sp = spawn(
    process.execPath,
    [`-e`,`console.log('subprocess stdio output')`]
   //[`-e`,`process.exit(1)`]
)
console.log('pid is',sp.pid)

//Pipe child.stdout to parent.stdout
sp.stdout.pipe(process.stdout)

//Exit the subprocess
sp.on('close',(status)=>{
    console.log('exit status was',status)
})
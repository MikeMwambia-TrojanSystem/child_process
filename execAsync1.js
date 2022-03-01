/*
The difference between the execsync and exec is the fact that in exec the 
stderr and stdout are passed as parameters in the callback function
this is since it's asyncronous
*/
'use strict'
const { exec } = require('child_process')
//This method separated stderr and stdout and err object in the callback
//Also this method takes a set of commands as strings
exec(
    `"${process.execPath}" -e "console.log('A');throw Error('B')"`,
    (err,stdout,stderr)=>{
        console.log('err',err)
        console.log('subprocess stdout: ',stdout.toString())
        console.log('subprocess stderr : ',stderr.toString())
    }
)
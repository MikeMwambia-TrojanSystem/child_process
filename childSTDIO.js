'use strict'
const { spawn } = require('child_process')
const sp = spawn(
    process.execPath,
    [
        '-e',
        `console.error('err output'); process.stdin.pipe(process.stdout)`
    ],
    { stdio:['pipe','pipe','pipe'] }//The first pipe is for STDIN,second is for STDOUT,third is for STDERROR
)

sp.stdout.pipe(process.stdout)
sp.stderr.pipe(process.stdout)
sp.stdin.write('this input will become output\n')
sp.stdin.end()

/*
If we are not transforming the data in any way we can as well use inherit for the 
second pipe and this will automatically inherit from the parent process
The stdio option can also be passed a stream directly see example below for process.stdout
*/

const sp2 = spawn(
    process.execPath,
    [
        '-e',
        `console.error('err output'); process.stdin.pipe(process.stdout)`
    ],
    { stdio : ['pipe','inherit',process.stdout] }//Takes a stream
)

sp2.stdin.write('this input will become output\n')
sp2.stdin.end()

/*
You can ignore STERR output of the child process instead of writing it to parent
You use 'ignore'
*/
const sp3 = spawn(
    process.execPath,
    [
        '-e',
        `console.error('err output'); process.stdin.pipe(process.stdout)`
    ],
    {stdio:['pipe','inherit','ignore']}
)
sp3.stdin.write('this input will become output\n')
sp3.stdin.end()

/*
Spawn process with spawnSync
*/
const { spawnSync} = require('child_process')

spawnSync(
    process.execPath,[
        '-e',
        `console.error('err output'); process.stdin.pipe(process.stdout)`
    ],
    {
    input : 'this input will become output\n',
    stdio:['pipe','inherit','ignore']
    }
)
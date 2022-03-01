'use strict'
const { spawn } = require('child_process');

process.env.A_VAR_WE = 'JUST SET'
const sp = spawn(process.execPath,['-p','process.env'])
sp.stdout.pipe(process.stdout)


//If you pass an options object(like below) with an env property the parent environment variables will be overwritten
const sp1 = spawn(
    process.execPath,['-p','process.env'],{
        env : {SUBPROCESS_SPECIFIC:'ENV VAR'}
    }
)

sp1.stdout.pipe(process.stdout);//This will print {SUBPROCESS_SPECIFIC:'ENV VAR'}
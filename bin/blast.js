#!/usr/bin/env node
var fs = require('fs');
var blast = require('../index.js');
var concat = require('concat-stream');

// TODO: find a more reliable way to detect empty stdin
if (process.stdin.isTTY) {
  withoutPipe();
} else{
  withPipe();
}

function withPipe() {
  function callback(str){
    process.stdout.write(JSON.stringify(blast.parse(str)));
  }
  var con = concat(callback);
  process.stdin.pipe(con);
}

function withoutPipe() {
   console.log('ERROR: no content was piped');
   process.exit(1);
}

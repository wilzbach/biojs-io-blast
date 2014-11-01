#!/usr/bin/env node
var fs = require('fs');
var blast = require('../index.js');

// TODO: find a more reliable way to detect empty stdin
if (process.stdin.isTTY) {
  withoutPipe();
} else{
  withPipe();
}

function withPipe() {
  var str = fs.readFileSync('/dev/stdin');
  var dat = blast.parse(str);
  process.stdout.write(JSON.stringify(dat));
}

function withoutPipe() {
   console.log('ERROR: no content was piped');
   process.exit(1);
}

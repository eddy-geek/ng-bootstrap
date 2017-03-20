#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

var hookInputPath = 'misc/validate-commit.js';
var hookOutputFolder = '.git/hooks';
var hookOutputPath = '.git/hooks/commit-msg';

if (!fs.existsSync(hookOutputPath) && fs.existsSync(hookOutputFolder)) {
  fs.writeFileSync(hookOutputPath, fs.readFileSync(hookInputPath));
  fs.chmodSync(hookOutputPath, '0755');
}

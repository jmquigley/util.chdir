# util.chdir [![Build Status](https://travis-ci.org/jmquigley/util.chdir.svg?branch=master)](https://travis-ci.org/jmquigley/util.chdir) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo) [![NPM](https://img.shields.io/badge/npm-v0.0.5-blue.svg)](https://www.npmjs.com/package/util.chdir)

> An implementation of pushd/popd for JavaScript

This mimics the bash pushd/popd functions.  When changing a directory the `pushd` will place the current directory onto a stack and then change to the requested directory.  When `popd` is called, then the previous directory is restored from the top of that stack.  This is a way to simplify backtracking through a directory hierarchy.

## Installation

To install as a global package and cli:
```
$ npm install --global util.chdir
```

To install as a development dependency with cli:
```
$ npm install --save-dev util.chdir
```

## Usage

    const chdir = require('util.chdir');
    
    // assume directory is /home
    chdir.pushd('/tmp');
    // pushes /home on the stack and changes to /tmp
    
    chdir.popd();
    // pops the top of the stack and switches to that directory

# util.chdir [![Build Status](https://travis-ci.org/jmquigley/util.chdir.svg?branch=master)](https://travis-ci.org/jmquigley/util.chdir) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo) [![NPM](https://img.shields.io/npm/v/util.chdir.svg)](https://www.npmjs.com/package/util.chdir)  [![Coverage Status](https://coveralls.io/repos/github/jmquigley/util.chdir/badge.svg?branch=master)](https://coveralls.io/github/jmquigley/util.chdir?branch=master)

> An implementation of pushd/popd for JavaScript

This mimics the bash [pushd/popd functions](https://en.wikipedia.org/wiki/Pushd_and_popd).  When changing a directory the `pushd` will place the current directory onto a stack and then change to the requested directory.  When `popd` is called, then the previous directory is restored from the top of that stack.  This is a way to simplify backtracking through a directory hierarchy.

## Installation

To install as a global package and cli:
```
$ npm install --global util.chdir
```

To install as a development dependency with cli:
```
$ npm install --save-dev util.chdir
```

## Scripts
The following `npm` scripts are available within this module:

```
$ npm run postinstall
``` 
Runs after the module is installed.  It creates the directories needed for test coverage.  It also sets the permissions on these directories to 777

```
$ npm test
```
Runs the [xo](https://www.npmjs.com/package/xo) lint tool.  If that is successful then it runs the [ava](https://www.npmjs.com/package/ava) unit test suite.  The [nyc](https://www.npmjs.com/package/nyc) tool is used, with the unit test runner, to generate output for test coverage.  This process is wrapped by the `cmd.js` module.

```
$ npm run report
```
Creates a coverage report.  The `npm test` must be run first to generate the data needed in the report.

## Usage

    const chdir = require('util.chdir');
    
    // assume directory is /home
    chdir.pushd('/tmp');
    // pushes /home on the stack and changes to /tmp
    
    chdir.popd();
    // pops the top of the stack and switches to that directory

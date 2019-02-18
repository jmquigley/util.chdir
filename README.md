# util.chdir

> An implementation of pushd/popd for JavaScript

[![build](https://travis-ci.org/jmquigley/util.chdir.svg?branch=master)](https://travis-ci.org/jmquigley/util.chdir)
[![analysis](https://img.shields.io/badge/analysis-tslint-9cf.svg)](https://palantir.github.io/tslint/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![testing](https://img.shields.io/badge/testing-jest-blue.svg)](https://facebook.github.io/jest/)
[![NPM](https://img.shields.io/npm/v/util.chdir.svg)](https://www.npmjs.com/package/util.chdir)
[![coverage](https://coveralls.io/repos/github/jmquigley/util.chdir/badge.svg?branch=master)](https://coveralls.io/github/jmquigley/util.chdir?branch=master)

This mimics the bash [pushd/popd functions](https://en.wikipedia.org/wiki/Pushd_and_popd).  When changing a directory the `pushd` will place the current directory onto a stack and then change to the requested directory.  When `popd` is called, then the previous directory is restored from the top of that stack.  This is a way to simplify backtracking through a directory hierarchy.

## Installation

This module uses [yarn](https://yarnpkg.com/en/) to manage dependencies and run scripts for development.

To install as a global package and cli:
```
$ yarn global add util.chdir
```

To install as a development dependency with cli:
```
$ yarn add --dev util.chdir
```

To build the app and run all tests:
```
$ yarn run all
```


## Usage

    const chdir = require('util.chdir');

    // assume directory is /home
    chdir.pushd('/tmp');
    // pushes /home on the stack and changes to /tmp

    chdir.popd();
    // pops the top of the stack and switches to that directory

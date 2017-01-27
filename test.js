'use strict';

const path = require('path');
const test = require('ava');
const fs = require('fs-extra');
const home = require('expand-home-dir');
const timestamp = require('util.timestamp');
const chdir = require('./index');

let unitTestDir = home(path.join('~/', '.tmp', `unit-test-data-${timestamp()}`));

test.before(t => {
	if (fs.existsSync(unitTestDir)) {
		fs.removeSync(unitTestDir);
	}
	fs.mkdirsSync(unitTestDir);
	t.pass();
});

test.after.always('cleanup', t => {
	fs.removeSync(unitTestDir);
	t.pass();
});

test('Validating directory change', t => {
	let startingLocation = process.cwd();
	let cwd = chdir.pushd(unitTestDir);
	t.is(startingLocation, cwd);
	t.is(chdir.popd(), startingLocation);
});

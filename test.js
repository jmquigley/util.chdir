'use strict';

const path = require('path');
const test = require('ava');
const fs = require('fs-extra');
const home = require('expand-home-dir');
const uuidV4 = require('uuid/v4');
const chdir = require('./index');

let unitTestBaseDir = home(path.join('~/', '.tmp', 'unit-test-data'));
let unitTestDir = home(path.join(unitTestBaseDir, uuidV4()));
if (fs.existsSync(unitTestDir)) {
	fs.mkdirsSync(unitTestDir);
}

test.before(t => {
	if (fs.existsSync(unitTestDir)) {
		fs.removeSync(unitTestDir);
	}
	fs.mkdirsSync(unitTestDir);
	t.pass();
});

test.after.always('cleanup', t => {
	fs.removeSync(unitTestBaseDir);
	t.pass();
});

test('Validating directory change', t => {
	let startingLocation = process.cwd();
	let cwd = chdir.pushd(unitTestDir);
	t.is(startingLocation, cwd);
	t.is(chdir.popd(), startingLocation);
});

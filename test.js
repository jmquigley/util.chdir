'use strict';

const test = require('ava');
const fs = require('fs-extra');
const chdir = require('./index');

let unitTestDir = 'tmp-unit-test-data';

test.before(t => {
	if (fs.existsSync(unitTestDir)) {
		fs.removeSync(unitTestDir);
	}
	fs.mkdirSync(unitTestDir);
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

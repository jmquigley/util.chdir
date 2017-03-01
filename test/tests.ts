'use strict';

import * as assert from 'assert';
import * as fs from 'fs-extra';
import * as path from 'path';
import * as uuid from 'uuid';
import {popd, pushd} from '../index';

const home = require('expand-home-dir');

let unitTestBaseDir = home(path.join('~/', '.tmp', 'unit-test-data'));
let unitTestDir = home(path.join(unitTestBaseDir, uuid.v4()));
if (fs.existsSync(unitTestDir)) {
	fs.mkdirsSync(unitTestDir);
}

describe('Testing util.chdir', () => {

	before(() => {
		if (fs.existsSync(unitTestDir)) {
			fs.removeSync(unitTestDir);
		}
		fs.mkdirsSync(unitTestDir);
	});

	after(() => {
		fs.removeSync(unitTestBaseDir);
	});

	it('Validating directory change', () => {
		let startingLocation: string = process.cwd();
		let cwd = pushd(unitTestDir);
		assert.equal(startingLocation, cwd);
		assert(popd(), startingLocation);
	});
});

'use strict';

import * as assert from 'assert';
import * as fs from 'fs-extra';
import {Fixture} from 'util.fixture';
import {popd, pushd} from '../index';

describe('Testing util.chdir', () => {

	after(() => {
		let directories = Fixture.cleanup();
		directories.forEach((directory: string) => {
			assert(!fs.existsSync(directory));
		});
	});

	it('Validating directory change', () => {
		let fixture = new Fixture();

		let startingLocation: string = process.cwd();
		let cwd = pushd(fixture.dir);
		assert.equal(startingLocation, cwd);
		assert(popd(), startingLocation);
	});
});

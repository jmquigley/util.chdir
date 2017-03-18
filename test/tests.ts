'use strict';

import * as assert from 'assert';
import * as fs from 'fs-extra';
import {popd, pushd} from '../index';

describe('Testing util.chdir', () => {
	it('Validating directory change', () => {
		let startingLocation: string = process.cwd();
		let cwd = pushd('test');
		assert.equal(startingLocation, cwd);
		assert(popd(), startingLocation);
	});
});

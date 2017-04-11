'use strict';

import test from 'ava';
import {popd, pushd} from '../index';

test('Validating directory change', t => {
	const startingLocation: string = process.cwd();
	const cwd = pushd('test');
	t.is(startingLocation, cwd);
	t.is(popd(), startingLocation);
});

#!/usr/bin/env node

'use strict';

const ps = require('child_process');
const fs = require('fs-extra');

let directories = [
	'./coverage',
	'./.nyc_output'
];

directories.forEach(function(directory) {
	fs.mkdirsSync(directory);
	if (process.platform !== 'win32') {
		ps.execSync('chmod 777 ./coverage');
	}
});

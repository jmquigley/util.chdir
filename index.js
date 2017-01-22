'use strict';

let fs = require('fs-extra');

let directoryStack = [];

/**
 * Retrieves the top of the directory list stack, changes to that directory
 * and returns.  If there are no directories in the list, it just returns.
 * @returns {string} the name of the directory that was retrieved.
 */
function popd() {
    let directory = '';
    if (directoryStack.length > 0) {
        directory = directoryStack.pop();
        process.chdir(directory);
    }

    return directory;
}


/**
 * Mimics the command line pushd/popd for changing directory locations.  This
 * call will save the current directory onto a stack and then change to the
 * given directory
 * @param directory {string} the directory to change to
 * @returns {string} the working directory before the change
 */
function pushd(directory) {
    let cwd = process.cwd();

    if (fs.existsSync(directory)) {
        directoryStack.push(cwd);
        process.chdir(directory);
    }

    return cwd;
}


module.exports = {
    popd: popd,
    pushd: pushd
};

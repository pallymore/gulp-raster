'use strict';

var fs        = require('fs'),
    File      = require('vinyl');

exports.isPNG = function isPNG (buffer) {
    var mnumber = '89504E470D0A1A0A'; // magic number of a PNG

    buffer = buffer.toString('hex').toUpperCase();

    return (buffer.substring(0, mnumber.length) === mnumber);
};

exports.createTestFile = function createTestFile () {
    return new File({
        cwd:  './test/assets/',
        base: './test/assets/',
        path: './test/assets/2gis.svg',
        contents: fs.readFileSync('./test/assets/2gis.svg')
    });
};

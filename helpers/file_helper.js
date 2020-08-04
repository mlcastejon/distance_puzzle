'use strict';

const fs = require('fs');
const readline = require('readline');

function read(file) {
    return new Promise((resolve, reject) => {
        const stream = fs.createReadStream(file);
        // Handle stream error (IE: file not found)
        stream.on('error', reject);

        const reader = readline.createInterface({
            input: stream
        });

        const array = [];

        reader.on('line', line => {
            array.push(JSON.parse(line));
        });

        reader.on('close', () => resolve(array));
    });
}

//Write file 
function write(resultArray, file) {
    const stream = fs.createWriteStream(file);

    resultArray.forEach(result => {
        stream.write(JSON.stringify(result));
        stream.write('\r\n');
    });
    stream.end();
}

module.exports = {
    read: read,
    write: write
};
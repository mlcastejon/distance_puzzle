const file_helper = require('../helpers/file_helper');

const assert = require('assert').strict;
const fs = require('fs');

const content = [
{a: 1},
{a: 2},
{a: 3}
];

// Test that function expects array of objects
const invalid_content = "blah blah blah";
try {
    file_helper.write(invalid_content, 'test.txt')
} catch(error) {
    assert(error instanceof TypeError)
}

// Test that file exists
file_helper.write(content, 'test.txt');
assert(fs.existsSync('test.txt'))

// Test that file contains same data we wrote
file_helper
    .read('test.txt')
    .then(data => {
        assert.equal(data.length, 3);
        assert.equal(data[0].a, 1);
        assert.equal(data[2].a, 3);
    })
    .then(() => {
        // Cleanup
        console.log("file_helper tests passed");
        fs.unlink('test.txt', (err) => {
            if (err) {
                console.error(err)
                return
            }
        });
    })
    .catch(error => {
        console.log(error)
    });

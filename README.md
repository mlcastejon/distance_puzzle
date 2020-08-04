# Distance puzzle

This code takes a list of client with GPS coordinates and returns a list of clients within 100Km radius of a set of coordinates. 

## How to run

Install nodejs and run:
```
npm install
node app.js
```

The script will read a list of clients from `customers.txt` and write the results to `output.txt`.

## How to run the test 

```
node tests/customer_helper_test.js
node tests/file_helper_test.js
node tests/math_helper_test.js
```

There will only be output if there are errors.
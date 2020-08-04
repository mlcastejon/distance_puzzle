
const file_helper = require('./helpers/file_helper');
const customer_helper = require('./helpers/customer_helper');

file_helper
    // Read file
    .read('customers.txt')
    // Filter by distance
    .then(cust_list => {
        return customer_helper.filter(cust_list);
    })
    // Order results
    .then(cust_list => {
        return customer_helper.sort(cust_list);
    })
    // Save to disk
    .then(cust_list => {
        file_helper.write(cust_list, 'output.txt');
    })
    .catch(error => {
        console.log(error)
    });


const customer_helper = require('../helpers/customer_helper');
const assert = require('assert').strict;

cust_list = [
    { latitude: "52.986375", user_id:12, name:"Christina McArdle", longitude:"-6.043701"},
    { latitude: "51.92893", user_id: 1, name: "Alice Cahill", longitude: "-10.27699"}
]

assert.equal(customer_helper.filter(cust_list)[0].user_id, 12);

assert.equal(customer_helper.sort(cust_list)[0].user_id, 1);

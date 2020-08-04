const math_helper = require('../helpers/math_helper');
const assert = require('assert').strict;

const earth_radius = 6371

const office = {
    latitude: 53.339428,
    longitude: -6.257664
}
// Customer {"latitude":"52.966","user_id":15,"name":"Michael Ahearn","longitude":"-6.463","distance":43.722487459407596}
const customer = {
    latitude: 52.966,
    longitude: -6.463
}

const antipodean = {
    latitude: office.latitude * -1,
    longitude: office.longitude + 180
}

// I'm not using 0 because the formula has an error margin
assert.equal(math_helper.calculate_distance(office, office), 0.00013425878593145295);

// Test with the customer location 
assert.equal(math_helper.calculate_distance(office, customer), 43.722487459407596);

// Test with the office antipodean location
assert.equal(math_helper.calculate_distance(office, antipodean), 20015.086661761787);

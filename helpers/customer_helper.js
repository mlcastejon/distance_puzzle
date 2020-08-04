const math_helper = require('./math_helper');

const office = {
  latitude: 53.339428,
  longitude: -6.257664
}

function filter(cust_list) {
  return cust_list.filter(function(cust) {
    return math_helper.calculate_distance(office, cust) <= 100;
  }); 
}

function sort(cust_list) {
  return cust_list.sort(function (cust1, cust2) {
    return cust1.user_id - cust2.user_id;
  });
}

module.exports = {
  filter: filter,
  sort: sort
};


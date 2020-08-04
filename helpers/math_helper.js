const earth_radius = 6371

function degrees_to_radians(degrees) {
  return degrees * (Math.PI / 180);
}

function calculate_distance(office, customer) {

  var office_lat = degrees_to_radians(office.latitude);
  var office_long = degrees_to_radians(office.longitude);

  var customer_lat = degrees_to_radians(customer.latitude);
  var customer_long = degrees_to_radians(customer.longitude);

  // Adding all the values in just one operation is better 
  // but it might be confusing to read.
  var sin_office = Math.sin(office_lat);
  var cos_office = Math.cos(office_lat);

  var sin_cust = Math.sin(customer_lat);
  var cos_cust = Math.cos(customer_lat);

  var cos_lambda = Math.cos(Math.abs(office_long - customer_long));

  var increase_sigma = Math.acos(
    ((sin_office * sin_cust) + (cos_office * cos_cust * cos_lambda)));

  //distance in Km
  var distance = earth_radius * increase_sigma;

  return distance;
}

module.exports = {
  calculate_distance: calculate_distance
};
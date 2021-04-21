// business logic
function Location(street, town, county){
  this.street = street;
  this.town = town;
  this.county = county;
}

Location.prototype.address = function(){
  return this.street + "," + this.town + "," + this.county;
}

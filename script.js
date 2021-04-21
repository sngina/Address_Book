//  the business logic
function contact(first , last ,email ,phone, location) {

  this.first = first;
  this.last = last;
  this.email = email;
  this.phone = phone;
  this.location =[];

}

function Location(street, city, county){
  this.street = street;
  this.city = city;
  this.county = county;
}
contact.prototype.fullName = function(){
  return this.first + " " + this.last;
};


Location.prototype.address = function(){
  return this.street + "," + this.town + "," + this.county;
}
//the user interface
$(document).ready(function(){
 $("#contact").submit(function(event){
     event.preventDefault();
     var userFirstName = $("input#firstName").val();
     var userSecondName = $("input#lastName").val();
     var userEmail = $("input#email").val();
     var userNumber = parseInt($("input#phone").val());
     // address
     var userStreet = $("input#street").val();
     var userCity = $("input#city").val();
     var userCounty = $("input#county").val();
    // new objects create
     var newContact = new contact(userFirstName  , userSecondName, userEmail, userNumber);
     var newAddress = new Location(userStreet, userCity, userCounty);
    
     newContact.location.push(newAddress);

    $("ul#displayContacts").append("<li class ='moreDetails'>" + newContact.fullName() + "</li>");

    $(".moreDetails").last().click(function(){
      $("#detail").slideToggle();
      $("#detailheading").text(newContact.fullName());
      $("#fname").text(newContact.first);
      $("#sname").text(newContact.last);  
      $("#mail").text(newContact.email);   
      $("#tele").text(newContact.phone);   
      $("#stree").text(newContact.location[0].street);
      $("#cty").text(newContact.location[0].city);
      $("#count").text(newContact.location[0].county);   
    })
 })
})

//  the business logic
function contact (first , last ,email ,phone, location) {

this.first = first;
this.last = last;
this.email = email;
this.phone = phone;
this.location =[];

}
//the user interface
$(document).ready(function(){
 $(".form-group").submit(function(){
     event.preventDefault();
     var userFirstName = $("input#firstName").val();
     var userSecondName = $("input#lastName").val();
     var userEmail = $("input#email").val();
     var userNumber = parseInt($("input#phone"));
     var newContact = new Contact (userFirstName  ,userSecondName);
    
 })
})

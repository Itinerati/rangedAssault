Template.register.events({
  'submit form': function(event){
    event.preventDefault();

    var email = $("#email").val(),
        password = $("#password").val();

    if(email && password){
      Accounts.createUser({email: email, password:password}, function(error){
      if(error){
        bootbox.alert("Sorry, please try a better email or password");
      } else {
        Router.go("campaign.select");
      }
    });
    }
    else {
      bootbox.alert("Please enter your email and password");
    }
  }
})

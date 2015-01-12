Router.route('/', {
  name: "entry",
  template: "entry"
});

Router.route('/register', {
  name: "register",
  template: "register"
});

Router.route('/campaign', {
  name: "campaign.select",
  template: "campaign.select",
  onAfterAction: function(){
    if(Meteor.userId()){
      this.render();
    } else {
      Router.go('/');
    }
  }
});

Router.route('/', {
  name: "entry",
  template: "entry"
});

Router.route('/register', {
  name: "register",
  template: "register"
});

Router.route('/campaign/select', {
  name: "campaign.select",
  template: "campaignSelect",
  onAfterAction: function(){
    if(Meteor.userId()){
      this.render();
    } else {
      Router.go('/');
    }
  }
});


Router.route('/campaign/new', {
  name: "campaign.new",
  template: "newCampaign"
});

Router.route('/character/create', {
  name: "character.create",
  template: "characterCreate"
});

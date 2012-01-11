Ember.LOG_STATE_TRANSITIONS = false;

KR = Ember.Application.create({
    ready: function() {
        console.log('Appication ready');
        $.tablesorter.defaults.widgets = ['zebra'];

        //KR.stateManager = KR.stateManagerObj.create();
    }
});

KR.ClickableView = Ember.View.extend({
  click: function(evt) {
    alert("ClickableView was clicked!");
  }
});

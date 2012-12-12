PlannerAPP.View.DeleteEventButtonView = PlannerAPP.View.ButtonView.extend({
      template: Ember.Handlebars.compile("Delete from Calendar"),
      click : function(e){
          console.log(this.content);
          }
})
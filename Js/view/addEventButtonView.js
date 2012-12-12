PlannerAPP.View.AddEventButtonView = PlannerAPP.View.ButtonView.extend({
    template: Ember.Handlebars.compile("Add to Calendar"),
    click : function(e){
            PlannerAPP.Controller.calendarController.insertEvent(this.content);
        }
})
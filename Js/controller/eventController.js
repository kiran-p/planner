PlannerAPP.Controller.EventController = Ember.Object.extend({
    selected : null,
    event  : null,
    selectedValue : function(){
        PlannerAPP.Controller.plannerController.setSearchType(this.selected);
    }.observes('selected')
})
PlannerAPP.Controller.eventController = PlannerAPP.Controller.EventController.create({})
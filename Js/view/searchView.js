

PlannerAPP.View.SearchView = Ember.TextField.extend({
classNames : ["search"],
keyUp: function(){
    if(this.value){
    PlannerAPP.Controller.plannerController.getSearchResult(this.value, function(data) {
        PlannerAPP.Model.planner.set('searchResultArray',data);
    });
    } }
});




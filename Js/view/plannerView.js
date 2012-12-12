PlannerAPP.View.PlannerView = Ember.ContainerView.extend({
    childViews : ['searchView','resultView'],
    searchView :PlannerAPP.View.SearchView,
    resultView : PlannerAPP.View.ResultView
})

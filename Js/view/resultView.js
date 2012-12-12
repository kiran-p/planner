PlannerAPP.View.ResultView = Ember.CollectionView.extend({
    contentBinding : 'PlannerAPP.Model.planner.searchResultArray',
    classNames : ['search-result'],
    itemViewClass : PlannerAPP.View.EventView
})

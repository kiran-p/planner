PlannerAPP.View.EventView = Ember.View.extend({
    classNames : ['event'],
    template: Ember.Handlebars.compile( '{{#if view.content.ismovieType}}{{view PlannerAPP.View.EventMovieView contentBinding="view.content" }}{{/if}}{{#if view.content.isgameType}}{{view PlannerAPP.View.EventGameView contentBinding="view.content" }}{{/if}}{{#if view.content.isfoodType}}{{view PlannerAPP.View.EventFoodView contentBinding="view.content" }}{{/if}}{{#if view.content.isadventureType}}{{view PlannerAPP.View.EventAdventureView contentBinding="view.content" }}{{/if}}')
})


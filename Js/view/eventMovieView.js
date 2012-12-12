PlannerAPP.View.EventMovieView = Ember.View.extend({
     classNames : ['movie'],
     template: Ember.Handlebars.compile('<div>{{view.content.summary}}</div><div>{{view.content.start.date}}</div><div>{{view.content.location}}</div><div>{{view.content.region}}</div><div>{{view.content.date}}</div><div>{{view.content.city}}</div><img {{bindAttr src="view.content.image"}}>'+'{{view PlannerAPP.View.AddEventButtonView contentBinding="view.content"}}'),
 })
//  +'{{view PlannerAPP.View.DeleteEventButtonView contentBinding="view.content"}}'
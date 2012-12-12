PlannerAPP.View.EventAdventureView = Ember.View.extend({
     classNames : ['adventure'],
     template: Ember.Handlebars.compile('<div>{{view.content.summary}}</div><div>{{view.content.location}}</div><div>{{view.content.region}}</div><div>{{view.content.date}}</div><div>{{view.content.city}}</div><img {{bindAttr src="view.content.image"}}>')
 })

PlannerAPP.View.EventFoodView = Ember.View.extend({
     classNames : ['food'],
     template: Ember.Handlebars.compile('<div>{{view.content.summary}}</div><div>{{view.content.location}}</div><div>{{view.content.region}}</div><div>{{view.content.cuisine}}</div><div>{{view.content.city}}</div><img {{bindAttr src="view.content.image"}}>')
 })

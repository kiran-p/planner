PlannerAPP.Model.Event = Ember.Object.extend({
    type : '',
    value : null,
    init:function(){
      this._super();
      var key = "is"+this.type+"Type";
      this.set(key,true);
    }

});

PlannerAPP.Model.Role = Ember.Object.extend({
    name:'',//admin, guest,user
    permission:[]// array of permission

})



//"name" : "admin"
//"actions":{"create":true, "read":true, "update":true, "delete":true}
//"name" : "guest"
//"actions":{"create":false, "read":true, "update":false, "delete":false}
//"name" : "user"
//"actions":{"create":false, "read":true, "update":true, "delete":true}

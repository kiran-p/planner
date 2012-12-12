PlannerAPP.Controller.CalendarController = Ember.Object.extend({

    clientId :'109683991095.apps.googleusercontent.com',
    apiKey :'AIzaSyANNS-QrqqcIIcIKHVzAUMrmaaq-zRT5vs',
    scopes : 'https://www.googleapis.com/auth/calendar',
    calendarID :'ej2icvrv0gd3as5cla9aljqgec@group.calendar.google.com',
    eventIdArray : new Array(),
    that :  this,
    handleClientLoad : function(){
        gapi.client.setApiKey(this.apiKey);
        window.setTimeout(this.checkAuth,1);
    },

    checkAuth : function(){
        gapi.auth.authorize({client_id: PlannerAPP.Controller.calendarController.clientId, scope: PlannerAPP.Controller.calendarController.scopes, immediate: true},PlannerAPP.Controller.calendarController.handleAuthResult);
    },

    handleAuthResult : function(authResult){
        var authorizeButton = document.getElementById('authorize-button');
        if (authResult && !authResult.error) {
            authorizeButton.style.visibility = 'hidden';
            PlannerAPP.Controller.calendarController.getEvents();
        //            insertEvent();
        //            deleteEvent();
        } else {
            authorizeButton.style.visibility = '';
            authorizeButton.onclick = handleAuthClick;
        }
    },

    handleAuthClick : function(event){
        gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false},this.handleAuthResult);
        return false;
    },

    getEvents : function(){
        that = this;
        gapi.client.load('calendar', 'v3', function() {
            var request = gapi.client.calendar.events.list({
                calendarId: that.calendarID,
            });
            request.execute(function(resp) {
                for (var i = 0; i < resp.items.length; i++){
                    var eventIdObj = {"summary":resp.items[i].summary,"id":resp.items[i].id};
                    console.log(eventIdObj);
                }
            })
        })
    },

    insertEvent : function(obj){
        var resource = obj;
        that = this;
        gapi.client.load('calendar', 'v3', function() {
            var request = gapi.client.calendar.events.insert({
                'calendarId': that.calendarID,
                'resource': resource
            });
            request.execute(function(resp) {
                if (resp.id){
                    alert("Event was successfully added to the calendar!");
                }
                else{
                    alert("An error occurred. Please try again later.")
                }
            });
        });
    },

    deleteEvent : function(eventName){
        for(var key in eventArray)
        {

        }
        calendarId = this.calendarID;
        gapi.client.load('calendar', 'v3', function() {
            var request = gapi.client.calendar.events.delete({
                'calendarId': calendarID,
                'eventId': eventIdArray[eventIdArray.length-1]
            });
            request.execute(function(resp) {
                if (resp.error) {
                    alert('An error occurred, please try again later.')
                }
                else{
                    alert("Event was successfully removed from the calendar!");
                }
            });
        });
    }

    })
PlannerAPP.Controller.calendarController = PlannerAPP.Controller.CalendarController.create({})
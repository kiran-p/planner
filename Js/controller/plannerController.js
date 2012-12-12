PlannerAPP.Controller.PlannerController = Ember.Object.extend({
    events : [],

    getEventObjects : function(data){
        var eventArray = new Array();
        if(data){
        console.log(data);
        for(var i=0; i<data.length;i++){
            if(data[i].type == "movie") {
                var movieObj = data[i];
                eventArray.push(PlannerAPP.Model.EventMovie.create({summary : movieObj.summary,start :{date : movieObj.start.date},end :{date :movieObj.end.date},time : movieObj.timing,description : movieObj.description,location : movieObj.location,region : movieObj.region,date : movieObj.date,city : movieObj.city,image :movieObj.image  }));
            }else if(data[i].type == "adventure"){
                var adventObj = data[i];
                eventArray.push(PlannerAPP.Model.EventAdventure.create({summary : adventObj.summary,start :{date : adventObj.start.date},end :{date :adventObj.end.date},description : adventObj.description,location : adventObj.location,region : adventObj.region,date : adventObj.date,city : adventObj.city }));
            }else if(data[i].type == "game"){
                var gameObj = data[i];
                eventArray.push(PlannerAPP.Model.EventGame.create({summary : gameObj.summary,start :{date : gameObj.start.date},end :{date :gameObj.end.date},description : gameObj.description,location : gameObj.location,region : gameObj.region,cost : gameObj.cost1,city : gameObj.city,image :gameObj.image }));
            }else if(data[i].type == "food"){
                var foodObj = data[i];
                eventArray.push(PlannerAPP.Model.EventFood.create({ summary : foodObj.summary,start :{date : foodObj.start.date},end :{date :foodObj.end.date},description : foodObj.description,location : foodObj.location,region : foodObj.region,cuisine : foodObj.cuisine1,city : foodObj.city }));
            }
        } };
        console.log(eventArray);
        return eventArray;
    },

    getSearchResult : function(searchText, callback){
         var that = this;
//         $.get("search_data.php", function(data){
//             callback(that.getEventObjects(data.data));
//         });
         $.post("search_data.php", { "searchText": searchText},
            function(data) {
             callback(that.getEventObjects(data.data));
            });
    }
})
PlannerAPP.Controller.plannerController = PlannerAPP.Controller.PlannerController.create({})



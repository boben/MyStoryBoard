(function (controllers){
    var homeController = require("./homeController");
    var taskController = require('./taskController');
    controllers.init = function(app){
        homeController.init(app);
        taskController.init(app);
    };
}
)(module.exports)
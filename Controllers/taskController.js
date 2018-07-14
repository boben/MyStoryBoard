(function(taskController) {
    var data = require('../Services/Data');
    taskController.init = function(app){
        app.get('/tasks/get', (req, res) => {

            data.getTopTasks(function(err, results){
                res.send(results.initialData);
            }
        )

        });
        
        
    };
}
)(module.exports)
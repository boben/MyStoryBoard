(function(data){

    var seedData = require('./seedData');
    data.getTopTasks = function(next){

        next(null, seedData);
    };
}
)(module.exports)
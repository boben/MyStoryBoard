var express = require("Express");
var app = express();
var controllers = require('../Controllers');
controllers.init(app);

app.listen(3000, () => console.log('Server listening on port 3000!'));
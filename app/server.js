var app = require('./simple-app/app');
var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log(`Server started, listening on port ${port}`);
});
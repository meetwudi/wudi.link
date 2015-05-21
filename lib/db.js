var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_ADDR);

var db = mongoose.connection;
db.once('open', function() {
  console.log('Database connected');
});
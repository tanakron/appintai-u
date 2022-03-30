const MongoClient = require("mongodb").MongoClient;

const url =
  "mongodb+srv://1q2w3e4R1988:1q2w3e4R@cluster0.eyoqc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

var _db;
var dbname = "users";

const connectDb = (callback) => {
  if (_db) return callback();
  MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
    if (err) return console.log(err);
    _db = client.db(dbname);
    console.log("Database Connected");
    callback();
  });
};

const getDb = () => _db;
module.exports = {
  connectDb,
  getDb,
};

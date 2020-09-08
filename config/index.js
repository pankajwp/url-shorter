//https://sequelize.org/master/manual/model-basics.html
// By default, when the table name is not given, Sequelize automatically pluralizes the model name and uses that as the table name.
const Sequelize = require("sequelize");
const keys = require("./keys");

const connection = new Sequelize(keys.database, keys.username, keys.password, {
  port: "3306",
  host: keys.host,
  dialect: "mysql",  
  // timezone: 'Asia/Calcutta',
  logging: false,
});

// a single object which contains connection along with association
let db = {};

// Testing connections
try {
  connection.authenticate();
  console.log("Connection has been established successfully.");
} catch (err) {
  console.log(err);
}


db.connection = connection;
db.Sequelize = Sequelize;

db.Url = require("../models/Url")(Sequelize, connection);
db.UrlStats = require("../models/UrlStats")(Sequelize, connection);


///////////////  Assoications /////////////////////////////

db.Url.hasMany(db.UrlStats);
db.UrlStats.belongsTo(db.Url, { foreignKey: "urlId" });

module.exports = db;

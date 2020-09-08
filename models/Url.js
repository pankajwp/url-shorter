// sequelize : Models should be defined with the singular form of a word.
// ex; Users table to be named User
// ex; foo (singular), and the respective table name is foos
// https://sequelize.org/master/manual/naming-strategies.html

const Url = (Sequelize, connection) => {
  let urlSchema = connection.define("urls", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    originalUrl: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    mainUrl: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    shortUrl: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    uniqueCode: {
      type: Sequelize.STRING,
      allowNull: false,
    }   
  });
  return urlSchema;
};

module.exports = Url;

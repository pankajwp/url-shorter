const UrlStats = (Sequelize, connection) => {
    const statsSchema = connection.define("url_stats", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        urlId: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        location: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        ip: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    });
    return statsSchema;
};

module.exports = UrlStats;

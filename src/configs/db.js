const {Sequelize} = require("sequelize")

const orm = new Sequelize({
    username: process.env.DB_USERS_PROD,
    database: process.env.DB_NAME_PROD,
    password: process.env.DB_PASS_PROD,
    host: process.env.DB_HOST_PROD,
    port: 5432,
    dialect: "postgres",
    logging: false,
})

module.exports = orm
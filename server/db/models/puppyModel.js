const db = require('../database')
const Sequelize = require('sequelize')

const Puppy = db.define('puppy', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Puppy
const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>
{
    sequelize.define('temperament', {
        idTemperament: {
            type: DataTypes.UUID,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING
        },

    }, {
        tableName: 'temperament',
        createdAt: false,
        updatedAt: false
    })
}
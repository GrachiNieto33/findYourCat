const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>
{
    sequelize.define('origin', {
        idCodCountry: {
            type: DataTypes.STRING(5),
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(255)
        },

    }, {
        tableName: 'origin',
        createdAt: false,
        updatedAt: false
    })
}
const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>
{
    sequelize.define('breedTemperament', {
        idBreed: {
            type: DataTypes.UUID,
            primaryKey: true,
        },
        idTemperament: {
            type: DataTypes.UUID,
            primaryKey: true,
        }

    }, {
        tableName: 'breedTemperament',
        createdAt: false,
        updatedAt: false
    })
}
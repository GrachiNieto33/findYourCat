const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>
{
    sequelize.define('breed', {
        idBreed: {
            type: DataTypes.UUID,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(255)
        },
        weigthMax: {
            type: DataTypes.DECIMAL
        },
        weigthMin: {
            type: DataTypes.DECIMAL(5, 2)
        },
        lifeMax: {
            type: DataTypes.DECIMAL
        },
        lifeMin: {
            type: DataTypes.DECIMAL(5, 2)
        },
    }, {
        tableName: 'breed',
        createdAt: false,
        updatedAt: false
    })
}
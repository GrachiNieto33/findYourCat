require('dotenv').config();
const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } = process.env;

const sequelize = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    {
        host: DB_HOST,
        dialect: "postgres"
    }
)

// Read all files from folder models
const basename = path.basename(__filename);
const modelDefiners = [];
fs.readdirSync(path.join(__dirname, "/models"))
    .filter(
        (file) =>
            file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    )
    .forEach((file) =>
    {
        modelDefiners.push(require(path.join(__dirname, "/models", file)));
    });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
    entry[0][0].toUpperCase() + entry[0].slice(1),
    entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);
// --------------

const {
    Adoptions,
    Breed,
    BreedTemperament,
    Origin,
    Temperament
} = sequelize.models

//relations
Breed.hasMany(BreedTemperament, { foreignKey: 'idBreed' });
BreedTemperament.belongsTo(Breed, { foreignKey: 'idBreed' });

Temperament.hasMany(BreedTemperament, { foreignKey: 'idTemperament' });
BreedTemperament.belongsTo(Temperament, { foreignKey: 'idTemperament' });

Origin.hasMany(Breed);
Breed.belongsTo(Origin);

module.exports = {
    ...sequelize.models,

    conn: sequelize
}






//aqui levantamos el server que configuramos en app.js
require("dotenv").config();
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const port = process.env.PORT || 3001;

// Syncing all the models at once.

server.listen(port, () =>
{
    conn.sync({ force: true, alter: false });
});

require('dotenv').config();

module.exports = {
  development: {
    username : process.env.DB_USER,
    password : "Kunciku1@",
    database : process.env.DB_NAME,
    host : process.env.DB_HOST,
    dialect : "postgres",
    port : process.env.DB_PORT,

  },
  "test": {
    "username": "myapp_user",
    "password": "Kunciku1@",
    "database": "myapp_db",
    "host": "localhost",
    "dialect": "postgres"
  },
  "production": {
    "username": "myapp_user",
    "password": "Kunciku1@",
    "database": "myapp_db",
    "host": "localhost",
    "dialect": "postgres"
  }
}

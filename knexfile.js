require("dotenv").config(); 
const path = require("path");

const {
  DATABASE_URL = "postgres://pgsvbvps:nuYokJ49k3lCqynPlW5NaYS1tXtQUbpM@castor.db.elephantsql.com/pgsvbvps",
  DATABASE_URL_DEVELOPMENT = "postgresql://postgres@localhost/postgres",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
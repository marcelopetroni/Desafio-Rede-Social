require('dotenv').config();

module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: false,
        rejectUnauthorized: false
      }
    },
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 0
    }
  },
  test: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: false,
        rejectUnauthorized: false
      }
    },
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 0
    }
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: false,
        rejectUnauthorized: false
      }
    },
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 0
    }
  }
};

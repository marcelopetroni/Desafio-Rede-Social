const { Sequelize } = require('sequelize');
require('dotenv').config(); 

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres', 
  protocol: 'postgres', 
  logging: false,       
  dialectOptions: {
    ssl: process.env.DATABASE_URL.includes('localhost') ? false : {  
      require: true,
      rejectUnauthorized: false  
    },
  }
});

async function main() {
  try {
    await sequelize.authenticate();
    console.log('Conexão ao banco de dados realizada com sucesso!');
    const [results] = await sequelize.query('SELECT NOW()');
    console.log('Hora atual do servidor PostgreSQL:', results[0].now);
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  } finally {
    await sequelize.close();
  }
}

main();

const Sequelize = require('sequelize')
const sequelize = new Sequelize('banco1db', 'Th', 'q1w2', {
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: " + erro)
})
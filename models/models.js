const sequelize = require('../utilities/sequelize').sequelizeConnection
const Professor = require('./professores').Professor
const Escola = require('./escolas').Escola
const Aluno = require('./alunos').Aluno
const Turma = require('./turmas').Turma
const Desafio = require('./desafios').Desafio
const Ronda = require('./rondas').Ronda
const Modulo = require('./modulos').Modulo
const Jogo = require('./jogos').Jogo
const Nivel = require('./niveis').Nivel

Professor.hasMany(Escola)
Professor.hasMany(Modulo)
Professor.hasMany(Desafio)
Escola.hasMany(Turma)
Turma.hasMany(Aluno)
Turma.hasMany(Desafio)
Modulo.hasMany(Jogo)
Aluno.hasMany(Jogo)
Jogo.hasMany(Nivel)
Nivel.hasMany(Ronda)

Escola.belongsTo(Professor)
Turma.belongsTo(Escola)
Aluno.belongsTo(Turma)
Modulo.belongsTo(Professor)
Jogo.belongsTo(Modulo)
Jogo.belongsTo(Aluno)
Nivel.belongsTo(Jogo)
Ronda.belongsTo(Nivel)
Desafio.belongsTo(Professor)
Desafio.belongsTo(Turma)

sequelize.sync().then(()=> {
    console.log("Connected to Database");
}).catch(error => {
    console.log(error);
})

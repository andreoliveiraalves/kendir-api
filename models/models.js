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
const EscolaProfessor = require('./escolaprofessor').EscolaProfessor




Professor.hasMany(Modulo) 
Professor.hasMany(Desafio) 
Escola.hasMany(Turma) 
Turma.hasMany(Aluno) 
Modulo.hasMany(Jogo) 
Jogo.hasMany(Nivel) 
Nivel.hasMany(Ronda) 
Aluno.hasMany(Ronda) 
EscolaProfessor.belongsTo(Professor)
EscolaProfessor.belongsTo(Escola)
Turma.belongsTo(Escola) 
Aluno.belongsTo(Turma) 
Modulo.belongsTo(Professor) 
Jogo.belongsTo(Modulo) 
Nivel.belongsTo(Jogo) 
Ronda.belongsTo(Nivel) 
Ronda.belongsTo(Aluno) 
Desafio.belongsTo(Professor) 
 
sequelize.sync().then(()=> {
    console.log("Connected to Database");
}).catch(error => {
    console.log(error);
})

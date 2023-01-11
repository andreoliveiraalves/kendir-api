require('dotenv').config()
const express = require('express');
const app = express();  
const cors = require('cors')
const port = process.env.PORT ?? 3000
const sequelize = require('./utilities/sequelize').sequelizeConnection
const rota_alunos = require('./routes/alunos')
const rota_desafios = require('./routes/desafios')
const rota_escolas = require('./routes/escolas')
const rota_jogos = require('./routes/jogos')
const rota_modulos = require('./routes/modulos')
const rota_niveis = require('./routes/niveis')
const rota_professores = require('./routes/professores')
const rota_rondas = require('./routes/rondas')
const rota_turmas = require('./routes/turmas')

sequelize.authenticate().then(function(errors) { 
    if (errors) {
        console.error('Unable to connect to the database:', errors);
    } else {
        console.log('connected to mysql');
    }
 });

app.use(express.json());
app.use(cors()); 

app.get("/", (req, res) => {
    res.send()
});

app.use('/alunos', rota_alunos)
app.use('/desafios', rota_desafios)
app.use('/escolas', rota_escolas)
app.use('/jogos', rota_jogos)
app.use('/modulos', rota_modulos)
app.use('/niveis', rota_niveis)
app.use('/professores', rota_professores)
app.use('/rondas', rota_rondas)
app.use('/turmas', rota_turmas)

app.listen(port,()=> {
    console.log('Server running on port ' + port); 

})
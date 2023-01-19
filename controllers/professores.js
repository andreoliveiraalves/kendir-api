const Professor = require('../models/professores').Professor

const criarProfessor = (req, res) => {
    Professor.findOne({
        where: {
            nome: req.body.nome
            }
    }).then((result) => {
        if (result) {
            res.status(406).send('Desafio já existe')
        }
        else {
            const professor = new Professor({
                nome: req.body.nome,
                apelido: req.body.apelido,
                email: req.body.email,
                password: req.body.password,
            })
            professor.save().then((result) => {
                res.status(200).json(result)
            }).catch((err) => {
                console.log(err)
                res.status(400).send(err)
            })
        }
    }).catch((error) => {
        console.log(error)
        res.status(400).send(error)
    })
}

const getPagingData = (data, page, limit) => {
    // data Sequelize Model method findAndCountAll function has the form
    // {
    //     count: 5,
    //     rows: [
    //              tutorial {...}
    //         ]
    // }
    const totalItems = data.count;
    const professores = data.rows;
    const currentPage = page;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, professores, totalPages, currentPage };
};

// Display list of all users (with pagination)
exports.findAll = async (req, res) => {
    //get data from request query string (if not existing, they will be undefined)
    let { page, size, nome } = req.query;
    // console.log(`Page ${page} Size ${size} Nome ${nome}`)

    // validate page
    if (page && !req.query.page.match(/^(0|[1-9]\d*)$/g)) {
        res.status(400).json({ message: 'Page number must be 0 or a positive integer' });
        return;
    }
    else
        page = parseInt(page); // if OK, convert it into an integer
    // validate size
    if (size && !req.query.size.match(/^([1-9]\d*)$/g)) {
        res.status(400).json({ message: 'Size must be a positive integer' });
        return;
    } else
        size = parseInt(size); // if OK, convert it into an integer

    // Sequelize function findAndCountAll parameters: 
    //      limit -> number of rows to be retrieved
    //      offset -> number of rows to be offseted (not retrieved)
         // limit = size (default is 3)
    const offset = page ? page * limit : 0; // offset = page * size (start counting from page 0)
    // console.log(`Limit ${limit} Offset ${offset}`)

    // search by title require to build a query with the operator L
    const condition = nome ? { nome: { [Op.like]: `%${nome}%` } } : null;

    try {
        let professores = await Professor.findAndCountAll({ where: condition, offset })
        
        // map default response to desired response data structure
        res.status(200).json({
            success: true,
            totalItems: professores.count,
            professores: professores.rows,
            currentPage: page ? page : 0
        });
    }
    catch (err) {
        res.status(500).json({
            success: false, msg: err.message || "Some error occurred while retrieving the teacher."
        })
        
    }
};

// List just one user
exports.findOne = async (req, res) => {
    try {
        let professor = await Professor.findByPk(req.params.professorID)

         if (professor === null)
            res.status(404).json({
                success: false, msg: `Cannot find any teacher with ID ${req.params.professorID}.`
            });
        else
            res.json({ success: true, professor: professor });
    }
    catch (err) {
        res.status(500).json({
            success: false, msg: `Error retrieving teacher with ID ${req.params.professorID}.`
        });
    };
};

exports.criarProfessor = criarProfessor;
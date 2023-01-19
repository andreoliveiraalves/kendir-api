const Turma = require('../models/turmas').Turma

const criarTurma = (req, res) => {
    Turma.findOne({
        where: {
            nome: req.body.nome
            }
    }).then((result) => {
        if (result) {
            res.status(406).send('Turma já existe')
        }
        else {
            const turma = new Turma({
                escolaId: req.body.escolaId,
                nome: req.body.nome,
            })
            turma.save().then((result) => {
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
    const turmas = data.rows;
    const currentPage = page;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, turmas, totalPages, currentPage };
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
        let turmas = await Turma.findAndCountAll({ where: condition, offset })
        
        // map default response to desired response data structure
        res.status(200).json({
            success: true,
            totalItems: turmas.count,
            turmas: turmas.rows,
            currentPage: page ? page : 0
        });
    }
    catch (err) {
        res.status(500).json({
            success: false, msg: err.message || "Some error occurred while retrieving the classes."
        })
        
    }
};

// List just one user
exports.findOne = async (req, res) => {
    try {
        let turma = await Turma.findByPk(req.params.turmaID)

         if (turma === null)
            res.status(404).json({
                success: false, msg: `Cannot find any class with ID ${req.params.turmaID}.`
            });
        else
            res.json({ success: true, turma: turma });
    }
    catch (err) {
        res.status(500).json({
            success: false, msg: `Error retrieving class with ID ${req.params.turmaID}.`
        });
    };
};

exports.criarTurma = criarTurma;
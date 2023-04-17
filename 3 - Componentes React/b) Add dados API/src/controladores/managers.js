const { managers } = require('../bancoDeDados');
let { identificadorManagers } = require('../bancoDeDados')

const listManagers = (req, res) => {
    return res.json(managers).json(managers);
}

const cadastroManagers = (req, res) => {
    const { name, email, status } = req.body;

    if (!name) {
        return res.status(400).json({ mensagem: 'O nome é obrigatório!!!' })
    }
    if (!email) {
        return res.status(400).json({ mensagem: 'O email é obrigatório!!!' })
    }

    if (!status) {
        return res.status(400).json({ mensagem: 'O status é obrigatório!!!' })
    }
    const manager =
    {
        id: identificadorManagers++,
        name,
        email,
        status: status
    }

    managers.push(manager);
    return res.status(201).json(managers)

}

module.exports = {
    listManagers,
    cadastroManagers,
}

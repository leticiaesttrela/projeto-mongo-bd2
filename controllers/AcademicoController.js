const Academico = require('../models/Academico');

//listar a lista de Evento Academico
const listarAcademico = async (req, res) => {
    Academico.find({}, { _id: true, __v: false }).then(result => {
        res.status(200).send(result);
    }).catch(e => res.status(400).send(e));
}

const buscarPorDescricao = async (req, res) => {
    Academico.find({ $text: { $search: req.params.descricao } }, { _id: true, __v: false }).then(result => {
        res.status(200).send(result);
    }).catch(e => res.status(400).send(e));
}

// salvar Evento Academico
const salvarAcademico = async (req, res) => {
    Academico.create(req.body).then(result => { res.status(201).send(result) }).catch(e => res.status(400).send(e));
}

// deletar Evento Academico
const deletarAcademico = async (req, res) => {
    Academico.deleteOne({ _id: req.params.id }).then(result => {
        if (result.deletedCount > 0) res.status(200).send('Removido com sucesso');
        else res.status(404).send('Evento não encontrado');
    }).catch(e => res.status(400).send(e));
}

// atualizar Evento Academico
const atualizarAcademico = async (req, res) => {
    await Academico.findById(req.params.id).then(result => {
        if (result) {
            result.set(req.body);
            result.save();
            res.status(200).send('Atualizado com sucesso');
        }
    }).catch(e => res.status(404).send('Evento não encontrado'));
}

module.exports = { listarAcademico, salvarAcademico, buscarPorDescricao, deletarAcademico, atualizarAcademico };

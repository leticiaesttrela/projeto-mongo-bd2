
const User = require("../models/user");

const salvaruser = async (req, res) => {
  User.create(req.body)
    .then(result => {
      res.status(201).send(result);
    })
    .catch(e => res.status(400).send(e));
}

const buscaruser = async (req, res) => {
  User.find({ $text: { $search: req.params.descricao } }, { _id: true, __v: false })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(e => res.status(400).send(e));
}

module.exports = { salvaruser, buscaruser };

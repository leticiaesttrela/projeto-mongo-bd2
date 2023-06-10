var express = require('express');
var router = express.Router();
const academicoController = require('../controllers/AcademicoController');

router.get('/', academicoController.listarAcademico);
router.get('/:descricao', academicoController.buscarPorDescricao);
router.post('/', academicoController.salvarAcademico);
router.delete('/:id', academicoController.deletarAcademico);
router.put('/:id', academicoController.atualizarAcademico);

module.exports = router;
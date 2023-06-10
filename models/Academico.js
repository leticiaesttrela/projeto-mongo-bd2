const mongoose = require('../database/mongo');

const academicoSchema = new mongoose.Schema({
    titulo: String,
    descricao: String,
    dataInicio: { type: Date, default: Date.now },
    dataFim: { type: Date, default: Date.now },
    lat: String,
    lng: String,
  },{collection: 'academico'});
  
  academicoSchema.index({titulo:'text', descricao:'text'},{default_language:'pt', weights:{titulo:2, descricao:1}});
  
  const Academico = mongoose.model('Academico', academicoSchema);

  module.exports = Academico;
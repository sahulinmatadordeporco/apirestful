const express = require('express');
const {pegarTodasAsAulas, procurarAulas, atualizarAulas, criarAulas, deletarAulas} = require('../controle/controlador_aulas');

const router_aulas = express.Router();

router_aulas.get('/aulas', pegarTodasAsAulas)
router_aulas.get('/aulas/:id', procurarAulas)
router_aulas.post('/aulas', atualizarAulas)
router_aulas.put('/aulas/:id', criarAulas)
router_aulas.delete('/aulas/:id', deletarAulas)

module.exports = router_aulas
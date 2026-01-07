const express = require('express');
const router = express.Router();
const { buscarSelicPorData } = require('../services/selicService');

router.get('/', async (req, res) => {
  try {
    const dataInicial =
      req.body?.dataInicial || req.query?.dataInicial;

    const dataFinal =
      req.body?.dataFinal || req.query?.dataFinal;

    if (!dataInicial) {
      return res.status(400).json({
        error: 'dataInicial é obrigatória (DD/MM/AAAA)',
      });
    }

    const hoje = new Date().toLocaleDateString('pt-BR');

    const selic = await buscarSelicPorData(
      dataInicial,
      dataFinal || hoje
    );

    res.json(selic);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

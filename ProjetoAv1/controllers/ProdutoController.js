const Produto = require('../models/Produto');

exports.criarProduto = async (req, res) => {
  const { produto_nome, id_categoria } = req.body;

  try {
    const produto = await Produto.create({ produto_nome, id_categoria });
    res.json(produto);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
};

exports.listarProdutos = async (req, res) =>{
  try {
      const produtos = await Produto.findAll()
      res.status(200).json(produtos)
  } catch (error) {
      res.status(500).json({error: 'Erro ao consultar os produtos'})
  }
}
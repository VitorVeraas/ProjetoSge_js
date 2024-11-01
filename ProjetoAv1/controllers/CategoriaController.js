const Categoria = require('../models/Categoria');

exports.criarCategoria = async (req, res) => {
  const { nome_categoria } = req.body;

  try {
    const categoria = await Categoria.create({ nome_categoria });
    res.json(categoria);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar a categoria' });
  }
};

exports.listarCategorias = async (req, res) =>{
    try {
        const categorias = await Categoria.findAll()
        res.status(200).json(categorias)
    } catch (error) {
        res.status(500).json({error: 'Erro ao consultar as categorias'})
    }
}
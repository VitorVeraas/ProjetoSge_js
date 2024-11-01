const DetalhePedido = require('../models/DetalhePedido');

exports.criarDetalhePedido = async (req, res) => {
  const { pedido_id, produto_id, dt_valor, dt_desconto } = req.body;

  try {
    const detalhe = await DetalhePedido.create({
      pedido_id,
      produto_id,
      dt_valor,
      dt_desconto,
    });
    res.json(detalhe);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar detalhe do pedido' });
  }
};

exports.listarDetalhePedidos = async (req, res) =>{
  try {
      const detalhes = await DetalhePedido.findAll()
      res.status(200).json(detalhes)
  } catch (error) {
      res.status(500).json({error: 'Erro ao consultar os detalhes dos pedidos'})
  }
}
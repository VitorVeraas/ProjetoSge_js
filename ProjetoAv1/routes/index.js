const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');
const ClienteController = require('../controllers/ClienteController');
const PedidoController = require('../controllers/PedidoController');
const CategoriaController = require('../controllers/CategoriaController');
const ProdutoController = require('../controllers/ProdutoController');
const DetalhePedidoController = require('../controllers/DetalhePedidoController');

// Rotas de Usuario
router.post('/usuarios', UsuarioController.criarUsuario);
router.get('/usuarios', UsuarioController.listarUsuarios);

// Rotas de Cliente
router.post('/clientes', ClienteController.criarCliente);
router.get('/clientes', ClienteController.listarClientes);

// Rotas de Pedido
router.post('/pedidos', PedidoController.criarPedido);
router.get('/pedidos', PedidoController.listarPedidos);

// Rotas de Categoria
router.post('/categorias', CategoriaController.criarCategoria);
router.get('/categorias', CategoriaController.listarCategorias);

// Rotas de Produto
router.post('/produtos', ProdutoController.criarProduto);
router.get('/produtos', ProdutoController.listarProdutos);

// Rotas de DetalhePedido
router.post('/detalhes', DetalhePedidoController.criarDetalhePedido);
router.get('/detalhes', DetalhePedidoController.listarDetalhePedidos);

module.exports = router;
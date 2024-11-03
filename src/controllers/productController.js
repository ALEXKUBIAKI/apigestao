const productRepository = require('../repositories/productRepository');

exports.createProduct = async (req, res, next) => {
  try {
    const { name, price, codigodebarras } = req.body;
    const product = await productRepository.createProduct({
      name, price, codigodebarras, userId: req.user.userId
    });
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, price, codigodebarras } = req.body;
    const product = await productRepository.updateProduct(id, { name, price, codigodebarras });
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    await productRepository.deleteProduct(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

exports.getProducts = async (req, res, next) => {
  try {
    const products = await productRepository.getProducts();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

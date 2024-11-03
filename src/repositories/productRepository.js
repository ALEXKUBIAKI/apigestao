const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createProduct = async (data) => {
  try {
    const existingProduct = await prisma.product.findUnique({
      where: { codigodebarras: data.codigodebarras }
    });

    if (existingProduct) {
      throw new Error('Produto com este código de barras já existe');
    }

    return await prisma.product.create({ data });
  } catch (error) {
    throw error;
  }
};

exports.updateProduct = async (id, data) => {
  try {
    const existingProduct = await prisma.product.findUnique({
      where: { codigodebarras: data.codigodebarras }
    });

    if (existingProduct && existingProduct.id !== parseInt(id)) {
      throw new Error('Código de barras já existe em outro produto');
    }

    return await prisma.product.update({
      where: { id: parseInt(id) },
      data
    });
  } catch (error) {
    throw error;
  }
};

exports.deleteProduct = async (id) => {
  try {
    return await prisma.product.delete({ where: { id: parseInt(id) } });
  } catch (error) {
    throw error;
  }
};

exports.getProducts = async () => {
  try {
    return await prisma.product.findMany();
  } catch (error) {
    throw error;
  }
};

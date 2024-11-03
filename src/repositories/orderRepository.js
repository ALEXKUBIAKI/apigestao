const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createOrder = async (data) => {
  try {
    return await prisma.order.create({ data });
  } catch (error) {
    throw error;
  }
};

exports.updateOrder = async (id, data) => {
  try {
    return await prisma.order.update({
      where: { id: parseInt(id) },
      data
    });
  } catch (error) {
    throw error;
  }
};

exports.deleteOrder = async (id) => {
  try {
    return await prisma.order.delete({ where: { id: parseInt(id) } });
  } catch (error) {
    throw error;
  }
};

exports.getOrders = async () => {
  try {
    return await prisma.order.findMany();
  } catch (error) {
    throw error;
  }
};

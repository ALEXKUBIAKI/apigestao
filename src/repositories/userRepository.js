const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createUser = async (data) => {
  try {
    return await prisma.user.create({ data });
  } catch (error) {
    throw error;
  }
};

exports.findUserByEmail = async (email) => {
  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    return user;
  } catch (error) {
    throw error;
  }
};

exports.updateUser = async (id, data) => {
  try {
    return await prisma.user.update({
      where: { id: parseInt(id) },
      data
    });
  } catch (error) {
    throw error;
  }
};

exports.deleteUser = async (id) => {
  try {
    return await prisma.user.delete({ where: { id: parseInt(id) } });
  } catch (error) {
    throw error;
  }
};

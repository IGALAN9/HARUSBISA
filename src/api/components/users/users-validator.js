const joi = require('joi');

module.exports = {
  createUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
      password: joi.string().min(6).max(32).required().label('Password'),
      comfrimpass: joi.string().min(6).max(32).required().label('comfrimpass'),
    },
  },

  updateUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
    },
  },

  changePassword: {
    body: {
      passwordlama: joi.string().required().label('passwordlama'),
      passwordbaru: joi
        .string()
        .min(6)
        .max(32)
        .required()
        .label('passwordbaru'),
      comfrimpass: joi.string().min(6).max(32).required().label('comfrimpass'),
    },
  },
};

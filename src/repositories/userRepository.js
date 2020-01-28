/* eslint-disable no-param-reassign */
require('../models/userModel');

const Base = require('../../bin/base/baseRepository');

class userRepository {
  constructor() {
    this.base = new Base('User');
    this.book = new Base('Book');
    this.card = new Base('CreditCard');
  }

  async create(data) {
    const result = this.base.create(data);
    return result;
  }

  async update(id, data) {
    const result = this.base.update(id, data);
    return result;
  }

  async push(id, data) {
    const result = this.base.push(id, data);
    return result;
  }

  async readAll(dado) {
    const result = await this.base.readAll(dado);
    return result;
  }

  async readById(id) {
    const result = await this.base.readById(id);
    return result;
  }

  async delete(id) {
    const result = await this.base.delete(id);
    return result;
  }

  async getBooks(dado) {
    if (dado.titulo !== undefined) {
      dado.titulo = new RegExp(`${dado.titulo}`, 'i');
    }

    if (dado.tags !== undefined) {
      dado.tags = { $all: dado.tags };
    }

    const result = await this.book.readAll(dado);
    return result;
  }


  async requestAggregate(dado) {
    const { model } = this.base;

    const result = await model.aggregate(dado);
    return result;
  }
}

module.exports = userRepository;

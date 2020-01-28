require('../models/admModel');
const Base = require('../../bin/base/baseRepository');

class admRepository {
  constructor() {
    this.base = new Base('Adm');
  }

  async create(data) {
    return this.base.create(data);
  }

  async update(id, data) {
    return this.base.update(id, data);
  }

  async readAll(dado) {
    return this.base.readAll(dado);
  }

  async readById(id) {
    return this.base.readById(id);
  }

  async delete(id) {
    return this.base.delete(id);
  }
}

module.exports = admRepository;

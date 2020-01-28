const mongoose = require('mongoose');

class RepositoryBase {
  constructor(model) {
    this.model = mongoose.model(model);
  }

  async create(data) {
    // eslint-disable-next-line new-cap
    const result = await this.model.insertMany(data);
    return result;
  }

  async update(id, data) {
    await this.model.findByIdAndUpdate(id, { $set: data });
    const resultado = await this.model.findById(id);
    return resultado;
  }

  async updateWithoutId(data) {
    const resultado = await this.model.updateOne({ $set: data });
    return resultado;
  }

  async push(id, data) {
    await this.model.findOneAndUpdate({ _id: id }, { $push: data });
    const resultado = await this.model.findById(id);
    return resultado;
  }

  async readAll(dado) {
    return this.model.find(dado);
  }

  async readById(id) {
    const resultado = await this.model.findById(id);
    return resultado;
  }

  async delete(id) {
    return this.model.findByIdAndRemove(id);
  }

  async getModel() {
    return this.model;
  }
}

module.exports = RepositoryBase;

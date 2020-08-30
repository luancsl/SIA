/* eslint-disable no-param-reassign */
import '../../main/models/KcModel.js';

import Base from '../../bin/base/baseRepository.js';

class kcRepository {
  constructor() {
    this.base = new Base('Kc');
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

  async requestAggregate(dado) {
    const { model } = this.base;

    const result = await model.aggregate(dado);
    return result;
  }
}

export default kcRepository;

exports.post = async (repository, validationContract, req, res) => {
  try {
    const data = req.body;
    if (!validationContract.isValid()) {
      res
        .status(400)
        .send({ message: 'Existem dados invalidos', validation: validationContract.errors() })
        .end();
      return;
    }

    const resultado = await repository.create(data);
    res.status(201).send(resultado);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Post com erro, motivo: ', error);
    res.status(500).send({ message: 'Erro mo processamento', error });
  }
};

exports.put = async (repository, validationContract, req, res) => {
  try {
    const data = req.body;
    if (!validationContract.isValid()) {
      res
        .status(400)
        .send({ message: 'Existem dados invalidos', validation: validationContract.errors() })
        .end();
      return;
    }

    const resultado = await repository.update(req.params.id, data);
    res.status(202).send(resultado);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Put com erro, motivo: ', error);
    res.status(500).send({ message: 'Erro mo processamento', error });
  }
};

exports.get = async (repository, req, res) => {
  try {
    const data = await repository.get();
    res.status(200).send(data);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Get com erro, motivo: ', error);
    res.status(500).send({ message: 'Erro mo processamento', error });
  }
};

exports.getById = async (repository, req, res) => {
  try {
    const { id } = req.params;

    if (id) {
      const data = await repository.getById();
      res.status(200).send(data);
    } else {
      res.status(400).send({ message: 'O parametro Id precisa ser informado' });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('GetById com erro, motivo: ', error);
    res.status(500).send({ message: 'Erro mo processamento', error });
  }
};

exports.delete = async (repository, req, res) => {
  try {
    const { id } = req.params;

    if (id) {
      // const data = await repository.delete(id);
      res.status(200).send({ message: 'registro excluido com sucesso' });
    } else {
      res.status(400).send({ message: 'O parametro Id precisa ser informado' });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Delete com erro, motivo: ', error);
    res.status(500).send({ message: 'Erro mo processamento', error });
  }
};

const { Event: serviceModel } = require('../models/event')

const listEvenetByNameController = {
  getByName: async (req, res) => {
    try {
      const eventName = req.params.nome
      const event = await serviceModel.find({
        'informaçõesEvento.nome': { $regex: new RegExp(eventName, 'i') }
      });
      if (event.length === 0) {
        return res.status(404).json({ msg: 'Evento não encontrado.' });
      }
      res.status(200).json(event)

    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'Ocorreu um erro ao buscar o evento.' });
    }
  }
};

module.exports = listEvenetByNameController

const { Event: serviceModel } = require('../models/event')

const listAllEventController = {
  getAll: async (req, res) => {
    try {
      const event = await serviceModel.find()
      res.status(200).json(event)
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'Ocorreu um erro ao buscar os eventos.' });
    }
  }
};

module.exports = listAllEventController

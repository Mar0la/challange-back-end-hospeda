const { Event: serviceModel } = require('../models/event')
const { isValidObjectId } = require('mongoose');
const deletEvenetByIdController = {
  deleteById: async (req, res) => {
    try {
      const eventId = req.params.id

      if (!isValidObjectId(eventId)) {
        return res.status(400).json({ msg: 'ID inválido.' });
      }

      const event = await serviceModel.findById(eventId)

      if (!event) {
        return res.status(404).json({ msg: 'Evento não encontrado.' });
      }
      
      const deleteEvent = await serviceModel.findByIdAndDelete(eventId)
      res.status(200).json({ deleteEvent, msg: 'Evento excluido com sucesso.' })

    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'Ocorreu um erro ao buscar o evento.' });
    }
  }
};

module.exports = deletEvenetByIdController

const { Event: serviceModel } = require('../models/event')
const { isValidObjectId } = require('mongoose');

const updateEventByIdController = {
  updateById: async (req, res) => {
    try {
      const eventId = req.params.id

      if (!isValidObjectId(eventId)) {
        return res.status(400).json({ msg: 'ID inválido.' });
      }

      const { informaçõesEvento, localEvento, data } = req.body;
      const updatedEvent = await serviceModel.findByIdAndUpdate(
        eventId,
        {
          informaçõesEvento,
          localEvento,
          data,
        }, { new: true }
      );

      if (!updatedEvent) {
        return res.status(404).json({ msg: 'Evento não encontrado.' });

      }

      res.status(200).json({ updatedEvent, msg: 'Evento atualizado com sucesso.' })

    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: 'Ocorreu um erro ao atualizar o evento.' });
    }
  }


};

module.exports = updateEventByIdController

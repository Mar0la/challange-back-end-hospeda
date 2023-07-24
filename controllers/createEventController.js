const { Event: serviceModel } = require('../models/event')

const createEventController = {
  create: async (req, res) => {
    try {
      const { informaçõesEvento, localEvento, data } = req.body;

      const array = [informaçõesEvento, localEvento, data]
      
      array.forEach(item => {
        for(let i of Object.values(item)) {
          if(!i){
            return res.status(400).json({ msg: 'Dados incompletos. Verifique o corpo da requisição.' });
          }
        }
    } )

      const response = await serviceModel.create(req.body);
      res.status(201).json({ response, msg: 'Evento criado com sucesso!' });

    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Ocorreu um erro ao criar o evento.' });
    }
  }
};

module.exports = createEventController

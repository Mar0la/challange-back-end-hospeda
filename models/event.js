const mongoose = require('mongoose')

const { Schema } = mongoose

const eventSchema = new Schema({
  informaçõesEvento: {
  nome: {
    type: String,
    required: true
  },
  privado: {
    type: Boolean,
    required: true
  },
  descrição: {
    type: String,
    required: true
  }
 },
  localEvento: {
    cep: {
      type: Number,
      required: true
    },
    numero: {
      type: Number,
      required: true
    },
    endereço: {
      type: String,
      required: true
    },
    bairro: {
      type: String,
      required: true
    },
    cidade: {
      type: String,
      required: true
    },
    estado: {
      type: String,
      required: true
    },
  },
  data: {
    dataInicio: {
      type: String,
      required: true
    },
    horarioInicio: {
      type: String,
      required: true
    }
  }
}, {timestamps: true})

const Event = mongoose.model('Event', eventSchema)
module.exports = {
  Event,
  eventSchema
}
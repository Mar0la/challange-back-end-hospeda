const mongoose = require('mongoose')

async function main(){
  try {
    await mongoose.connect(process.env.MONGOURL)

    console.log('conectado no banco')
  } catch(error){
    console.log(`Erro: ${error}`)
  }
}

module.exports = main
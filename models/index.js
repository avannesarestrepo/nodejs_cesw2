const mongoose = require('mongoose')
const {Profile} = require('./ProfileModel')

const DB_URL_MONGO = 'mongodb+srv://angier:root@cluster0-4nyrf.mongodb.net/mongoose?retryWrites=true&w=majority'

//Cadena de conexión y se manda a llamar los modelos
mongoose.connect(DB_URL_MONGO,{ useNewUrlParser: true, useUnifiedTopology:true },(err)=>{
  if (!err) console.log('Conexión exitosa');
});

module.exports = {Profile}
let mongoose = require('mongoose');



// Employee Schema
const Serie = mongoose.model('Serie', {
    nombre: {
        type: String,
        required:true
    },
    plataforma: {
        type:String,
        required:true
    },
    calificacion: {
        type:Number,
        required:true
    },
    year: {
        type:String,
        required:true
    },
});



module.exports = {Serie}
const mongoose = require('mongoose')

const Schema = mongoose.Schema ;
const stationschema = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type:String,
        required: true

    },
    pumpnumber: {
        type: Number,
        required: true
        
    },
    pumptype: {
        type: String,
        required: true
        
    },
    intervention: {
        type: String,
        required: true
        
    },
imgstation:{
    type:String,
}
})

module.exports = mongoose.model('station', stationschema)
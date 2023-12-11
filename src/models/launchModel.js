const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let lauchSchema = new Schema ({
    flight_number: {
        type: Number,
        required: "Le chiffre est requis"
    },
    mission_name: {
        type : String,
        required: "Le contenu est requis"
    },
    mission_id: {
        type : Array,
        required: "Le contenu est requis"
    },
    launch_year: {
        type : Date,
        required: "Le contenu est requis"
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Launch', lauchSchema);

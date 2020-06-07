const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SchemaTypes = mongoose.Schema.Types;

const jobVacancies = new Schema({
    "REF_DATE": String,
    "COORDINATE": String,
    "GEO": String,
    "Job vacancy statistics": String,
    "North American Industry Classification System (NAICS)": String,
    "VALUE": Number,
    "Units": String,
    "Status" : String
},{collection: "Job Vacancies"});


module.exports = jobVacancies;
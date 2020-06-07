const mongoose = require('mongoose');
const jobVacancies = require('./Schema');

module.exports =  (connection = null)=>{
  let model;
  if(connection) {
      model = connection.model('Job Vacancies' , jobVacancies);
  }
  else {
      model = mongoose.model('Job Vacancies' , jobVacancies)
  }


  /*
  let query = await model.find({GEO: 'Canada'}).exec((err,data) => {
      console.log(data)
  });
  */
  return model
};
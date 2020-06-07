const mongoose = require('mongoose');

mongoose.start = start = async () => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/Data_for_MongoDB');
        console.log("connected to database: Data_for_MongoDB");

    }
    catch (err) {
        console.warn(err);
    }

};

mongoose.close = close = async () => {
  try {
    await mongoose.connection.close();
      console.log("mongodb has been disconnected")
  }  catch (err) {
      console.warn(err)
  }
};



// Fix depreciation warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true );

module.exports = mongoose;
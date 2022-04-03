const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb+srv://jamtogether111:DsZe1Gk2EffTDOKQ@cluster0.2dnvq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

module.exports = async () => {
  await mongoose.connect(MONGODB_URI, {
    keepAlive: 1,
    connectTimeoutMS: 30000,
  });
  return mongoose;
};

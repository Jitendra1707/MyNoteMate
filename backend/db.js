const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://jitu1:jitu1@cluster2.lkuvjrl.mongodb.net/";

// const connectTOMongo=()=>
// {
//     mongoose.connect(mongoURI,()=>{
//         console.log("Connected TO Mongo successfull");
//     })
// }
// module.exports = connectTOMongo;

// const mongoose = require('mongoose');
// const mongoURI = "mongodb://127.0.0.1:27017/jitu";



mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



const connectTOMongo = async () => {
  await mongoose.connect(mongoURI);
  console.log("Connected TO Mongo successfull");
};

module.exports = connectTOMongo;


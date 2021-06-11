import mongoose from 'mongoose';
const initDB = async () => {
  try {
    await mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.APP_TEST ? 'flashcards-test' :'flashcards'}`, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true})
  }catch(err){
    console.log(err)
  }
};

export default initDB;

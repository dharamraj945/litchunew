import mongoose from 'mongoose'

let isConnected = false

const ConnectToDb = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }


  try {
    const { connection } = await mongoose.connect("mongodb+srv://kishan:naCtHZBMzgJTBiVG@cluster0.3a0gree.mongodb.net/?retryWrites=true&w=majority", {

      dbname: "users", useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(connection)
    if (connection) {
      console.log("Connected");
      isConnected = true
    }
  } catch (error) {
    console.log(error);
  }

}
export default ConnectToDb;
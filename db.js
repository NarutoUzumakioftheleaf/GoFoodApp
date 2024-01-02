const mongoose = require("mongoose");

const URI = "mongodb+srv://GoFood:mern123@cluster0.uflo7ae.mongodb.net/gofoodmern?retryWrites=true&w=majority";

const mongoDB = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Connected to MongoDB");

        const fetchedData = await mongoose.connection.db.collection("food_items").find({}).toArray();
        const food_data = await mongoose.connection.db.collection("food_data").find({}).toArray();
       // console.log(fetchedData);
        global.food_items= fetchedData;
        global.food_data=food_data;
}
     catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
    
}
module.exports = mongoDB;

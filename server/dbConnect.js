const mongoose = require("mongoose");
require("dotenv").config();

module.exports = async () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log(`Database connected successfully`);
    })
    .catch((err)=>{
        console.log("DB not connected");
        console.error(err.message);
        process.exit(1);
    });
};

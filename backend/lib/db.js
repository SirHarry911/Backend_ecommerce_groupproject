// import mongoose from "mongoose";

// export const connectDB = async () => {
// 	try {
// 		const conn = await mongoose.connect(process.env.MONGO_URI);
// 		console.log(`MongoDB connected: ${conn.connection.host}`);
// 	} catch (error) {
// 		console.log("Error connecting to MONGODB", error.message);
// 		process.exit(1);
// 	}
// };
// const mongoose=require("mongoose")

// const connectDB=async ()=>{
//         mongoose.connect('mongodb://127.0.0.1:27017/Carbon', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
// }



// module.exports=connect

// const mongoose = require("mongoose");

// const connectDB = async () => {
//     mongoose.connect('mongodb://127.0.0.1:27017/Carbon', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     });
// };

// module.exports = connectDB;


// import mongoose from "mongoose";

// const connectDB = async () => {
//     await mongoose.connect('mongodb://127.0.0.1:27017/Carbon', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });
//     console.log("MongoDB connected");
// };

// export default connectDB;



// const connectDB = async () => {
//     try {
//         await mongoose.connect("mongodb://127.0.0.1:27017/Carbon");
//         console.log("MongoDB connected");
//     } catch (error) {
//         console.error("MongoDB connection error:", error);
//         process.exit(1); // Exit the process on connection failure
//     }
// };

// export default connectDB;


// import mongoose from "mongoose";

// const connectDB = async () => {
//     try {
//         await mongoose.connect("mongodb://127.0.0.1:27017/Carbon"); // Adjust if needed 
//         console.log("MongoDB connected");
//     } catch (error) {
//         console.error("MongoDB connection error:", error);
//         process.exit(1); // Exit the process on connection failure
//     }
// };

// export default connectDB;


import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
          dbName: "Carbon"
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1); // Exit the process on connection failure
    }
};

export default connectDB;

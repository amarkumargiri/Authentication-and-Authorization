import app from "./src/app.js";
import connectDB from "./src/config/database.js";

connectDB();


app.listen(3000, () => {
    console.log("sever is running on the port 3000.");
    
})
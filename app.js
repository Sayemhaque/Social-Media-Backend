import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotevn from "dotenv";

dotevn.config();

const app = express()
const PORT = process.env.PORT || 4001;;


// CONFIGARATION
 app.use(bodyParser.json({limit:"30mb" , extended:true}));
 app.use(bodyParser.urlencoded({limit:"30mb" , extended:true}));
 app.use(cors())



// database connection
mongoose.set("strictQuery", false);
mongoose
.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("database connected successfully");
    },
    (err) => {
      console.log(err);
    }
  );

app.get("/api", (req, res) => {
  res.send({ id: 1, name: "Md sayem", address: "kandipara Brahmanbaria" });
});

// run the server
app.listen(PORT, () => {
 try{
  console.log(`server is running on http://localhost:${PORT}/`);
 }catch(error){
  console.log(error)
 }
});

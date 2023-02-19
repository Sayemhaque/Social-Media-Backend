const express = require("express");
const app = express();
const PORT = 3000;



app.get("/api" , (req,res) => {
    res.send({id:1,name:"Md sayem" , address:"kandipara Brahmanbaria"})
})



// run the server
app.listen(PORT, () => {
console.log(`server is running on http://localhost:${PORT}/`)
})
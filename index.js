const express = require('express');

const port = process.env.port || 8080;

const app = express();

app.use(express.static(process.cwd()+"/client/build/"));

app.get('/', (req, res) => {
    res.send("hello from backend server")
})

app.listen(port, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log("server running on 5000");
    }
});
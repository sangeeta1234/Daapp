const express = require("express");
const dotenv = require('dotenv');
const app = express();

app.get('/', function (req, res) {
     res.send("Hello world");
});

app.use(express.json()) //req.body
app.use('/vandapp', require('./routes/vanda.router'));
// app.use(function (error, req, res) {
//     res.send(200).json({error: error});
// });
// app.use(function (err, req, res, next) {
//     res.json(err);
// })
const PORT = process.env.PORT;

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`listening PORT ${port}`);
})
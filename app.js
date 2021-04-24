const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors");
const Razorpay = require('razorpay');
const bodyParser = require('body-parser');
const crypto = require("crypto");
dotenv.config();
const app = express();

const instance = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

app.post('/api/payment/order', async (req, res) => {
    params = req.body
    try {
        let result = await instance.orders.create(params); 
        res.send(result)
    }
    catch (err) {
        console.log(err)
    }
})

app.post('/api/payment/verify', async (req, res)=>{
    
})

app.listen(3000, () => {
    console.log("i am listening at port 3000")
})
















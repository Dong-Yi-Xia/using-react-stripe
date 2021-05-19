const express = require('express')
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST)
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


app.post('/payment', cors(), async(req, res) => {
    let {amount, id} = req.body
    try{
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: 'USD',
            description: 'Figurine Collection',
            payment_method: id,
            confirm: true
        })
        console.log('payment', payment)
        res.json({
            message: 'Payment IS successful',
            success: true
        })
    }catch(error){
        console.log("Error", error)
        res.json({
            message: 'Payment Failed',
            success: false
        })
    }
})



app.listen(process.env.PORT || 4000, ()=>{
    console.log(`Listening to Server on port 4000`)
})
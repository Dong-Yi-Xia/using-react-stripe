import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'


const PUBLIC_KEY = 'pk_test_51IspXlJflzSdZeonlTjl8o47bkK7fRTtnxvmhddPPauAI2jIzEXOaH7cirUStO9yg9eXXm9zugiHGMmIt9axaWAg00vQQU9aTX'

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}

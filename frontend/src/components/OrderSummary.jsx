

import { motion } from "framer-motion";
import { useCartStore } from "../stores/useCartStore";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51QMlgjKaj0hyHnIBFiHSKTSWlUxtmLr827wF0dE7N1bS3mnkM8HEzYOfiTDQL0NtHsID0TCiUsxPeXIPvefjT2Xy00if8sYEm5");

const OrderSummary = () => {
    const { total, subtotal, coupon, isCouponApplied, cart } = useCartStore();

    const savings = subtotal - total;
    const formattedSubtotal = subtotal.toFixed(2);
    const formattedTotal = total.toFixed(2);
    const formattedSavings = savings.toFixed(2);

    const handlePayment = async () => {
        const stripe = await stripePromise;
        const accessToken = localStorage.getItem('accessToken'); // Adjust this to where you store your token

        // Check if access token is present
        if (!accessToken) {
            console.error("No access token found. User may not be logged in.");
            return; // Exit if there's no access token
        }

        const res = await fetch("http://localhost:5000/api/payments/create-checkout-session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`, // Include the access token
            },
            body: JSON.stringify({
                products: cart,
                couponCode: coupon ? coupon.code : null,
            }),
        });

        if (!res.ok) {
            const errorData = await res.json();
            console.error("Error:", errorData);
            return; // Exit if there's an error
        }

        const session = await res.json();
        console.log(session);
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
            console.error("Error:", result.error);
        }
    };

    return (
        <motion.div
            className='space-y-4 rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-sm sm:p-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <p className='text-xl font-semibold text-emerald-400'>Order summary</p>

            <div className='space-y-4'>
                <div className='space-y-2'>
                    <dl className='flex items-center justify-between gap-4'>
                        <dt className='text-base font-normal text-gray-300'>Original price</dt>
                        <dd className='text-base font-medium text-white'>₹{formattedSubtotal}</dd>
                    </dl>

                    {savings > 0 && (
                        <dl className='flex items-center justify-between gap-4'>
                            <dt className='text-base font-normal text-gray-300'>Savings</dt>
                            <dd className='text-base font-medium text-emerald-400'>-₹{formattedSavings}</dd>
                        </dl>
                    )}

                    {coupon && isCouponApplied && (
                        <dl className='flex items-center justify-between gap-4'>
                            <dt className='text-base font-normal text-gray-300'>Coupon ({coupon.code})</dt>
                            <dd className='text-base font-medium text-emerald-400'>-{coupon.discountPercentage}%</dd>
                        </dl>
                    )}
                    <dl className='flex items-center justify-between gap-4 border-t border-gray-600 pt-2'>
                        <dt className='text-base font-bold text-white'>Total</dt>
                        <dd className ='text-base font-bold text-emerald-400'>₹{formattedTotal}</dd>
                    </dl>
                </div>

                <motion.button
                    className='flex w-full items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePayment}
                >
                    Proceed to Checkout
                </motion.button>

                <div className='flex items-center justify-center gap-2'>
                    <span className='text-sm font-normal text-gray-400'>or</span>
                    <Link
                        to='/'
                        className='flex items-center text-sm font-medium text-emerald-400 hover:underline'
                    >
                        <MoveRight className='h-4 w-4' />
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default OrderSummary;
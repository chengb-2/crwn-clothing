import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51InAqjBV0WK00vN893cS2wRhe6TLsgJloFyNqOsiuoM4Ep5zbo6Uk6HMo8WKYeEXAZsjSUiDAl86tcUg22361vTV00nwVpBl5v";
  
  const onToken = token => {
    console.log(token);
    alert("Payment Successful!");
  }
  
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}
 
export default StripeCheckoutButton;
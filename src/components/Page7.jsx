/*eslint-disable */
import React, { useState } from 'react';

function Page7() {
  const [billingAddr, setbillingAddr] = useState(false);
  const addbillingaddress = () => {
    setbillingAddr(!billingAddr);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    // console.log('Form submitted');
  };

  return (
    <div className="main-payment-box">
      <div className="payment-title">
        Please Checkout here
      </div>
      <div className="payment-details-box">
        <div className="main-sub-forms main-account-details">
          <div className="sub-forms-details account-details">
            <p className="sub-forms-headings account-details-title"> Account Information</p>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Email" required />
              <input type="number" placeholder="Phone Number" required />
            </form>
          </div>

          <div className="sub-forms-details shipping-address-details">
            <p className="sub-forms-headings shipping-address-title"> Shipping Address</p>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Address" required />
              <input type="text" placeholder="City" required />
              <div className="specific-input">
                <input className="specific-state" type="text" placeholder="State/Province" required />
                <input className="specific-pin" type="number" placeholder="Zip/Postal Code" required />
              </div>
              <input type="text" placeholder="Country" required />
            </form>
          </div>

          <div className="checkbox-adding-address">
            <p className="sub-forms-headings billing-address-title"> Billing Address</p>      
            <div className="checkbox-data">
               <input onClick={addbillingaddress} type="checkbox" className="billing-address-checkbox" /> 
               <p className="checkbox-text-content"> Use different Billing Address</p> 
            </div>
          </div>

          {billingAddr &&
            (<div className="sub-forms-details billing-address-details">
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Address" required />
                <input type="text" placeholder="City" required />
                <div className="specific-input specific-input-billing">
                  <input className="specific-state" type="text" placeholder="State/Province" required />
                  <input className="specific-pin" type="number" placeholder="Zip/Postal Code" required />
                </div>
                <input type="text" placeholder="Country" required />
              </form>
            </div>
          )}

        </div>
        <div className="main-sub-forms main-payment-method">
          <div className="sub-forms-details payment-method">
            <p className="sub-forms-headings payment-method-title"> Payment Method</p>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Cardholder Name" required />
              <input type="number" placeholder="Card Number" required />
              <p style={{textAlign:'left', marginTop:'10px', marginLeft:'5px'}}>Expiry</p>
              <div className="specific-input specific-input-payment">
                <input className="specific-state" type="month" placeholder="Month" required />
                <input className="specific-pin" type="number" placeholder="CVV" required />
              </div>
              <button className="placing-order-btn" type="submit" placeholder="Place order">
                Place order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page7;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, CreditCard, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';

type PaymentMethod = 'card' | 'upi' | 'cash';

const CheckoutPage: React.FC = () => {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [address, setAddress] = useState({
    name: '',
    street: '',
    city: 'Kishtwar',
    state: 'Jammu & Kashmir',
    pincode: '',
    phone: '',
  });
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState<boolean>(false);

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value
    });
  };

  const validateAddress = () => {
    const requiredFields = ['name', 'street', 'pincode', 'phone'];
    return requiredFields.every(field => address[field as keyof typeof address]);
  };

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateAddress()) {
      setCurrentStep(2);
    }
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      setIsOrderPlaced(true);
      clearCart();
      
      // Redirect after a few seconds
      setTimeout(() => {
        navigate('/');
      }, 5000);
    }, 2000);
  };

  const restaurantName = items.length > 0 ? items[0].restaurantName : '';

  if (items.length === 0 && !isOrderPlaced) {
    return (
      <div className="container-custom py-20 mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="mb-6">Add some items to your cart before proceeding to checkout.</p>
        <button 
          className="btn-primary"
          onClick={() => navigate('/restaurants')}
        >
          Browse Restaurants
        </button>
      </div>
    );
  }

  if (isOrderPlaced) {
    return (
      <div className="container-custom py-20 mt-16 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={32} className="text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Order Placed Successfully!</h2>
          <p className="mb-6 text-gray-600">
            Your food will be delivered in approximately 30-45 minutes.
          </p>
          <button 
            className="btn-primary w-full"
            onClick={() => navigate('/')}
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container-custom py-12 mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>
          
          {/* Steps Progress */}
          <div className="flex mb-8">
            <div className={`flex-1 pb-2 ${currentStep >= 1 ? 'border-b-2 border-primary-500' : 'border-b border-gray-300'}`}>
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${currentStep >= 1 ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                  1
                </div>
                <span className={currentStep >= 1 ? 'font-medium' : 'text-gray-500'}>Delivery Address</span>
              </div>
            </div>
            <div className={`flex-1 pb-2 ${currentStep >= 2 ? 'border-b-2 border-primary-500' : 'border-b border-gray-300'}`}>
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${currentStep >= 2 ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                  2
                </div>
                <span className={currentStep >= 2 ? 'font-medium' : 'text-gray-500'}>Payment</span>
              </div>
            </div>
          </div>
          
          {/* Step 1: Delivery Address */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
                
                <form onSubmit={handleAddressSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="label">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={address.name}
                        onChange={handleAddressChange}
                        className="input"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="label">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={address.phone}
                        onChange={handleAddressChange}
                        className="input"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="street" className="label">Street Address</label>
                    <input
                      type="text"
                      id="street"
                      name="street"
                      value={address.street}
                      onChange={handleAddressChange}
                      className="input"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="city" className="label">City</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={address.city}
                        onChange={handleAddressChange}
                        className="input"
                        disabled
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="label">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={address.state}
                        onChange={handleAddressChange}
                        className="input"
                        disabled
                      />
                    </div>
                    <div>
                      <label htmlFor="pincode" className="label">PIN Code</label>
                      <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        value={address.pincode}
                        onChange={handleAddressChange}
                        className="input"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-end">
                    <button
                      type="submit"
                      className="btn-primary px-6"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
          
          {/* Step 2: Payment */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                
                <form onSubmit={handlePaymentSubmit}>
                  <div className="space-y-4 mb-6">
                    <div className="border rounded-lg p-4 flex items-center cursor-pointer hover:bg-gray-50"
                         onClick={() => setPaymentMethod('card')}>
                      <input
                        type="radio"
                        id="card"
                        name="paymentMethod"
                        checked={paymentMethod === 'card'}
                        onChange={() => setPaymentMethod('card')}
                        className="mr-3 h-4 w-4"
                      />
                      <label htmlFor="card" className="flex items-center cursor-pointer flex-grow">
                        <CreditCard size={20} className="mr-2 text-gray-600" />
                        <span>Credit/Debit Card</span>
                      </label>
                    </div>
                    
                    <div className="border rounded-lg p-4 flex items-center cursor-pointer hover:bg-gray-50"
                         onClick={() => setPaymentMethod('upi')}>
                      <input
                        type="radio"
                        id="upi"
                        name="paymentMethod"
                        checked={paymentMethod === 'upi'}
                        onChange={() => setPaymentMethod('upi')}
                        className="mr-3 h-4 w-4"
                      />
                      <label htmlFor="upi" className="flex items-center cursor-pointer flex-grow">
                        <span className="font-semibold text-lg mr-2">UPI</span>
                        <span>Pay using UPI</span>
                      </label>
                    </div>
                    
                    <div className="border rounded-lg p-4 flex items-center cursor-pointer hover:bg-gray-50"
                         onClick={() => setPaymentMethod('cash')}>
                      <input
                        type="radio"
                        id="cash"
                        name="paymentMethod"
                        checked={paymentMethod === 'cash'}
                        onChange={() => setPaymentMethod('cash')}
                        className="mr-3 h-4 w-4"
                      />
                      <label htmlFor="cash" className="flex items-center cursor-pointer flex-grow">
                        <span className="font-semibold mr-2">₹</span>
                        <span>Cash on Delivery</span>
                      </label>
                    </div>
                  </div>
                  
                  {/* Address Summary */}
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <div className="flex items-start mb-2">
                      <MapPin size={18} className="text-gray-600 mr-2 mt-1" />
                      <div>
                        <h3 className="font-medium">Delivering to:</h3>
                        <p className="text-gray-600">
                          {address.name}, {address.street}, {address.city}, {address.state} - {address.pincode}
                        </p>
                        <p className="text-gray-600">Phone: {address.phone}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="text-primary-600 text-sm font-medium mt-2"
                      onClick={() => setCurrentStep(1)}
                    >
                      Change Address
                    </button>
                  </div>
                  
                  <div className="mt-6 flex justify-between">
                    <button
                      type="button"
                      className="btn-outline"
                      onClick={() => setCurrentStep(1)}
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="btn-primary px-6"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Processing...' : 'Place Order'}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </div>
        
        {/* Order Summary */}
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            {restaurantName && (
              <div className="text-sm text-gray-600 mb-4 pb-4 border-b">
                From: {restaurantName}
              </div>
            )}
            
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <div>
                    <span className="font-medium">{item.quantity}x</span> {item.menuItem.name}
                  </div>
                  <div>₹{(item.menuItem.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Delivery Fee</span>
                <span>₹40.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>GST</span>
                <span>₹{(total * 0.05).toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg mt-4 pt-2 border-t">
                <span>Total</span>
                <span>₹{(total + 40 + total * 0.05).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
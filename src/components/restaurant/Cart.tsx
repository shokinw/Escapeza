import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Plus, Minus, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const { items, removeItem, updateQuantity, total } = useCart();
  const [isOpen, setIsOpen] = React.useState(false);

  if (items.length === 0) return null;

  return (
    <>
      {/* Cart Toggle Button */}
      <motion.button
        className="fixed bottom-6 right-6 bg-primary-600 text-white p-4 rounded-full shadow-lg z-30"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative">
          <ShoppingCart size={24} />
          <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {items.length}
          </span>
        </div>
      </motion.button>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Cart Panel */}
            <motion.div
              className="fixed bottom-0 right-0 w-full sm:max-w-md h-auto max-h-[80vh] bg-white rounded-t-xl shadow-xl z-50 overflow-hidden"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <h2 className="text-xl font-semibold">Your Cart</h2>
                  <button onClick={() => setIsOpen(false)} className="p-1">
                    <X size={20} />
                  </button>
                </div>

                {/* Cart Items */}
                <div className="flex-grow overflow-y-auto p-4">
                  {items.length > 0 && (
                    <div className="text-sm text-gray-500 mb-4">
                      From {items[0].restaurantName}
                    </div>
                  )}
                  
                  {items.length > 0 ? (
                    <ul className="space-y-4">
                      {items.map((item) => (
                        <motion.li
                          key={item.id}
                          className="flex items-center justify-between border-b pb-3"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                        >
                          <div className="flex-1">
                            <h3 className="font-medium">{item.menuItem.name}</h3>
                            <p className="text-gray-500">
                              ₹{item.menuItem.price.toFixed(2)} × {item.quantity}
                            </p>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center border rounded">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 text-gray-600 hover:bg-gray-100"
                              >
                                <Minus size={16} />
                              </button>
                              <span className="px-2">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 text-gray-600 hover:bg-gray-100"
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                            
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <X size={18} />
                            </button>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  ) : (
                    <div className="text-center py-10">
                      <p className="text-gray-500">Your cart is empty</p>
                    </div>
                  )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                  <div className="p-4 border-t">
                    <div className="flex justify-between mb-4">
                      <span className="font-medium">Total</span>
                      <span className="font-bold">₹{total.toFixed(2)}</span>
                    </div>
                    <Link
                      to="/checkout"
                      className="btn-primary w-full py-3"
                      onClick={() => setIsOpen(false)}
                    >
                      Proceed to Checkout
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Cart;
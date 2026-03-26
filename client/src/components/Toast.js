import React, { useEffect, useState } from 'react';
import { FiCheckCircle, FiX } from 'react-icons/fi';

const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div className={`fixed top-20 right-4 z-50 transition-all duration-300 transform ${
      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
    }`}>
      <div className={`glass rounded-lg p-4 flex items-center space-x-3 min-w-[300px] ${
        type === 'success' ? 'border-green-500' : 'border-red-500'
      } border`}>
        <FiCheckCircle className={`text-xl ${
          type === 'success' ? 'text-green-500' : 'text-red-500'
        }`} />
        <span className="text-text-primary flex-1">{message}</span>
        <button
          onClick={handleClose}
          className="text-text-secondary hover:text-text-primary transition-colors duration-200"
        >
          <FiX size={18} />
        </button>
      </div>
    </div>
  );
};

export default Toast;

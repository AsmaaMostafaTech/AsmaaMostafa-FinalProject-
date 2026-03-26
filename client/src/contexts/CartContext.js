import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const initialState = {
  cart: [],
  wishlist: [],
  toast: null
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: action.payload.quantity || 1 }]
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ).filter(item => item.quantity > 0)
      };

    case 'CLEAR_CART':
      return {
        ...state,
        cart: []
      };

    case 'ADD_TO_WISHLIST':
      const existingWishlistItem = state.wishlist.find(item => item.id === action.payload.id);
      if (existingWishlistItem) {
        return state;
      }
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload]
      };

    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.id !== action.payload)
      };

    case 'MOVE_TO_CART':
      const wishlistItem = state.wishlist.find(item => item.id === action.payload);
      if (wishlistItem) {
        const cartItem = state.cart.find(item => item.id === action.payload);
        if (cartItem) {
          return {
            ...state,
            cart: state.cart.map(item =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
            wishlist: state.wishlist.filter(item => item.id !== action.payload)
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, { ...wishlistItem, quantity: 1 }],
            wishlist: state.wishlist.filter(item => item.id !== action.payload)
          };
        }
      }
      return state;

    case 'SHOW_TOAST':
      return {
        ...state,
        toast: action.payload
      };

    case 'HIDE_TOAST':
      return {
        ...state,
        toast: null
      };

    case 'LOAD_CART':
      return {
        ...state,
        cart: action.payload.cart || [],
        wishlist: action.payload.wishlist || []
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart and wishlist from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('pricefinder-cart');
    const savedWishlist = localStorage.getItem('pricefinder-wishlist');
    
    if (savedCart || savedWishlist) {
      dispatch({
        type: 'LOAD_CART',
        payload: {
          cart: savedCart ? JSON.parse(savedCart) : [],
          wishlist: savedWishlist ? JSON.parse(savedWishlist) : []
        }
      });
    }
  }, []);

  // Save cart and wishlist to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('pricefinder-cart', JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    localStorage.setItem('pricefinder-wishlist', JSON.stringify(state.wishlist));
  }, [state.wishlist]);

  const addToCart = (product, quantity = 1) => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity } });
    dispatch({
      type: 'SHOW_TOAST',
      payload: { message: `${product.name} added to cart!`, type: 'success' }
    });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
    dispatch({
      type: 'SHOW_TOAST',
      payload: { message: 'Item removed from cart', type: 'success' }
    });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
    }
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    dispatch({
      type: 'SHOW_TOAST',
      payload: { message: 'Cart cleared', type: 'success' }
    });
  };

  const addToWishlist = (product) => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
    dispatch({
      type: 'SHOW_TOAST',
      payload: { message: `${product.name} added to wishlist!`, type: 'success' }
    });
  };

  const removeFromWishlist = (productId) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId });
    dispatch({
      type: 'SHOW_TOAST',
      payload: { message: 'Item removed from wishlist', type: 'success' }
    });
  };

  const moveToCart = (productId) => {
    dispatch({ type: 'MOVE_TO_CART', payload: productId });
    dispatch({
      type: 'SHOW_TOAST',
      payload: { message: 'Item moved to cart!', type: 'success' }
    });
  };

  const hideToast = () => {
    dispatch({ type: 'HIDE_TOAST' });
  };

  const getCartTotal = () => {
    return state.cart.reduce((total, item) => {
      const cheapestPrice = Math.min(...item.stores.map(s => s.price));
      return total + (cheapestPrice * item.quantity);
    }, 0);
  };

  const getCartCount = () => {
    return state.cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getWishlistCount = () => {
    return state.wishlist.length;
  };

  const isInCart = (productId) => {
    return state.cart.some(item => item.id === productId);
  };

  const isInWishlist = (productId) => {
    return state.wishlist.some(item => item.id === productId);
  };

  const value = {
    cart: state.cart,
    wishlist: state.wishlist,
    toast: state.toast,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    addToWishlist,
    removeFromWishlist,
    moveToCart,
    hideToast,
    getCartTotal,
    getCartCount,
    getWishlistCount,
    isInCart,
    isInWishlist
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

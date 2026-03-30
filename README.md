# 🛍️ Price Finder - E-commerce Price Comparison Platform

## 📋 Project Description

Price Finder is a modern e-commerce platform that allows users to compare prices across multiple stores for electronic products. The application features a beautiful glassmorphism UI design with comprehensive product information, multiple image galleries, and seamless shopping experience.

### 🎯 Key Features

- **Product Comparison**: Compare prices across multiple retailers
- **Advanced Filtering**: Filter products by category, price range, and sorting options
- **Product Details**: Detailed product pages with multiple image galleries
- **Shopping Cart**: Add products to cart with quantity management
- **Wishlist**: Save favorite products for later purchase
- **Responsive Design**: Beautiful glassmorphism UI that works on all devices
- **Real-time Search**: Find products quickly and efficiently
- **Hot Deals**: Special deals section with savings calculations
- **Contact Form**: Functional contact form with backend integration

---

## 🛠️ Technologies Used

### Frontend
- **React 18** - Modern UI framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **Axios** - HTTP client for API requests

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **Nodemon** - Development server with auto-reload

### Development Tools
- **Concurrently** - Run multiple scripts simultaneously
- **Webpack** - Module bundler (via React Scripts)
- **Babel** - JavaScript transpiler (via React Scripts)

---

## 📁 Folder Structure

```
AsmaaMostafaMohamed(FinalProject)/
├── client/                          # React Frontend
│   ├── public/
│   │   ├── index.html               # Main HTML file
│   │   └── favicon.ico              # Favicon
│   ├── src/
│   │   ├── components/              # Reusable components
│   │   │   ├── FeaturedProducts.js  # Featured products section
│   │   │   ├── HeroSection.js       # Landing hero
│   │   │   ├── HowItWorks.js        # How it works section
│   │   │   ├── Navbar.js            # Navigation bar
│   │   │   └── Toast.js             # Notification component
│   │   ├── contexts/                # React Context
│   │   │   └── CartContext.js       # Cart & Wishlist state management
│   │   ├── pages/                   # Page components
│   │   │   ├── About.js             # About page
│   │   │   ├── Cart.js              # Shopping cart
│   │   │   ├── Checkout.js          # Checkout page
│   │   │   ├── Contact.js           # Contact page
│   │   │   ├── Deals.js             # Hot deals page
│   │   │   ├── Home.js              # Home page
│   │   │   ├── ProductDetail.js     # Product details page
│   │   │   ├── Products.js          # Products listing page
│   │   │   └── Wishlist.js          # Wishlist page
│   │   ├── App.js                   # Main App component
│   │   └── index.js                 # App entry point
│   ├── package.json                 # Frontend dependencies
│   └── .gitignore                   # Git ignore file
├── node_modules/                    # Node dependencies
├── server.js                        # Backend server
├── package.json                     # Backend dependencies
└── README.md                        # This file
```

---

## 🚀 How to Run Project

### Prerequisites
- Node.js (v16 or higher)
- npm (Node Package Manager)

### Step 1: Install Dependencies
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

### Step 2: Start the Application

**Option 1: Start Both Servers Separately**

```bash
# Terminal 1: Start Backend Server
npm start
# Server runs on http://localhost:5000

# Terminal 2: Start Frontend Server
cd client
npm start
# Frontend runs on http://localhost:3000
```

**Option 2: Quick Start (Recommended)**
```bash
npm run dev
```
This will start both servers concurrently:
- Backend will start on port 5000
- Frontend will start on port 3000

### Step 3: Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api/products

---

## 📁 أهم الملفات (Important Files)

### React Components

#### 🏠 **Main Pages**
- **`client/src/pages/Home.js`** - Homepage with hero section and featured products
- **`client/src/pages/Products.js`** - Products listing with filtering and sorting
- **`client/src/pages/ProductDetail.js`** - Detailed product view with image gallery
- **`client/src/pages/Cart.js`** - Shopping cart management
- **`client/src/pages/Wishlist.js`** - Wishlist management

#### 🧩 **Key Components**
- **`client/src/components/Navbar.js`** - Navigation with cart/wishlist counts
- **`client/src/components/FeaturedProducts.js`** - Featured products grid
- **`client/src/components/HeroSection.js`** - Landing section with search
- **`client/src/components/Toast.js`** - Notification system

#### 🔄 **State Management**
- **`client/src/contexts/CartContext.js`** - Cart and wishlist state management using React Context

### Backend Routes

#### 🛒 **Main API Endpoints**
```javascript
// server.js
app.get('/api/products', (req, res) => {
  // Get all products with filtering and sorting
  // Query params: category, minPrice, maxPrice, sortBy
});

app.get('/api/products/:id', (req, res) => {
  // Get single product by ID
});

app.post('/api/contact', (req, res) => {
  // Handle contact form submissions
});
```

#### 📦 **Product Data Structure**
```javascript
// Each product contains:
{
  id: 1,
  name: "iPhone 15 Pro Max",
  category: "Electronics",
  image: "https://i.pinimg.com/...",
  images: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"],
  description: "Product description...",
  rating: 4.8,
  reviews: 2453,
  stores: [
    { name: "Amazon", price: 1199.99, url: "#" },
    { name: "Best Buy", price: 1249.99, url: "#" }
  ]
}
```

### 🎨 **Styling & UI**
- **Tailwind CSS Configuration**: `client/tailwind.config.js`
- **Custom CSS Variables**: Glassmorphism effects and color scheme
- **Responsive Design**: Mobile-first approach

---

## 🎯 Key Features Implementation

### 🛍️ **Shopping Features**
- **Add to Cart**: Products can be added with quantity selection
- **Wishlist**: Save products for later
- **Price Comparison**: Multiple stores with different prices
- **Product Ratings**: Star ratings with review counts
- **Checkout Process**: Complete order flow with form validation

### 🖼️ **Image Gallery**
- **Multiple Images**: Each product has 4 high-quality images
- **Thumbnail Navigation**: Click thumbnails to switch main image
- **Image Sources**: Professional images from Pinterest
- **Zoom Effect**: Hover to zoom on product images

### 🔍 **Search & Filter**
- **Category Filter**: Filter by product categories
- **Price Range**: Set minimum and maximum price
- **Sort Options**: Sort by price, rating, or name
- **Real-time Updates**: Instant filtering without page reload

### 📱 **User Experience**
- **Toast Notifications**: Non-intrusive success/error messages
- **Loading States**: Smooth loading animations
- **Responsive Design**: Mobile-first approach
- **Glassmorphism UI**: Modern frosted glass effects

---

## 🌐 Browser Compatibility

- ✅ Chrome (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge

---

## 📱 Mobile Responsive

The application is fully responsive and works seamlessly on:
- 📱 Mobile phones (320px and up)
- 📱 Tablets (768px and up)
- 💻 Desktop computers (1024px and up)

---

## 🎨 Design System

### Colors
- **Primary**: Baby Blue (#00D4FF)
- **Background**: Dark Navy (#0F172A)
- **Card**: Glass effect with backdrop blur
- **Text**: Primary and secondary text colors

### Typography
- **Headings**: Bold and modern
- **Body**: Clean and readable
- **Buttons**: Consistent styling across the app

---

## 🚀 Performance Features

- **Lazy Loading**: Images load as needed
- **Optimized Bundle**: Webpack optimization
- **Caching**: API responses cached
- **Smooth Animations**: CSS transitions and transforms

---

## 📞 Contact & Support

For any questions or issues with the project, please refer to the contact form in the application or check the console for debugging information.

---

**Happy Shopping! 🛍️✨**

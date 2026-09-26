# 🍕 Fast React Pizza Co.

A modern, responsive pizza ordering web application built with **React 19**, **React Router v7**, and **Vite**. This application allows users to explore a tasty pizza menu, customize and manage their shopping cart, place orders with real-time address detection via geolocation, and track their delivery status.

---

## 🚀 Features

- 🍕 **Menu Browsing:** Real-time pizza menu loaded from a remote REST API with availability and pricing.
- 🛒 **Cart Management:** Seamlessly add items, adjust quantities, review totals, and manage your cart.
- 📍 **Geolocation Integration:** Automatically detect customer location to fill in delivery addresses.
- ⚡ **Order Placement & Tracking:** Submit orders with priority delivery options and look up real-time delivery statuses using unique order IDs.
- 🧭 **Modern Client-Side Routing:** Built using React Router v7 with nested route layouts, loaders, and actions.
- ⚡ **Lightning Fast:** Bundled and served with Vite for blazing-fast HMR and optimized production builds.

---

## 🛠️ Tech Stack

- **Frontend Library:** [React 19](https://react.dev/)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **Build Tool:** [Vite](https://vite.dev/)
- **API Service:** Fast React Pizza REST API & BigDataCloud Reverse Geocoding API
- **Styling:** CSS3 (responsive design)

---

## 📁 Project Structure

```text
src/
├── assets/          # Static assets (images, icons)
├── features/
│   ├── cart/        # Cart components & state (Cart, CartItem, CartOverview, EmptyCart)
│   ├── Menu/        # Menu components (Menu, MenuItem)
│   ├── order/       # Order creation & tracking (Order, OrderItem, CreateOrder)
│   └── user/        # User state & geolocation actions (userSlice, CreateUser)
├── services/        # API services (apiRestaurant, apiGeocoding)
├── ui/              # Reusable UI layout components (AppLayout, Header, Home, Error)
├── utils/           # Utility helpers (formatting currency, dates)
├── App.jsx          # Route definitions & router provider
├── main.jsx         # Application entry point
└── index.css        # Global styles
```

---

## 💻 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SecurityTalent/Fast-React-Pizza.git
   cd Fast-React-Pizza
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/` (or the port shown in your terminal).

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 👨‍💻 Author

Developed by **[SecurityTalent](https://github.com/SecurityTalent)**  
Inspired by Jonas Schmedtmann's Ultimate React Course.

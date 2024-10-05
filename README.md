# Ecomm - E-commerce Application

This project is a simple e-commerce application built using **React**. It allows users to browse a list of products, view product details, add products to a cart, and manage a wishlist. The app features basic functionality such as adding products to the cart, updating quantities, moving items to and from the wishlist, and removing items.

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)

## Features
- Display a list of products (iPhones and iPads)
- View product details for each item
- Add products to the shopping cart and wishlist
- Update product quantities in the cart
- Move items between the cart and wishlist
- Remove items from the cart or wishlist
- Display the total price of items in the cart
- Responsive design

## Demo
[https://ecomm-rhnshwsan-ishan-pathaks-projects.vercel.app/]

## Getting Started

### Prerequisites
To run this project locally, you need the following installed:
- [Node.js](https://nodejs.org/en/) (v12 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/ecomm.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd ecomm
   ```

3. **Install dependencies**:
   ```bash
   npm install
   # or if using Yarn
   yarn install
   ```

4. **Run the application**:
   ```bash
   npm start
   # or if using Yarn
   yarn start
   ```

5. **Open the application in your browser**:
   The app will be running at `http://localhost:3000`.

## Project Structure

```
ecomm/
│
├── public/
│   ├── index.html         # HTML template
│   ├── products.json       # Sample product data (iPhones, iPads, etc.)
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation bar component
│   │   ├── ProductList.jsx # Product list component
│   │   ├── ProductDescription.jsx # Product detail component
│   │   ├── Cart.jsx        # Cart component
│   │   ├── Wishlist.jsx    # Wishlist component
│   │
│   ├── App.js              # Main application component
│   ├── index.js            # Application entry point
│   ├── style.css           # Global styles for the application
│
├── .gitignore
├── README.md               # Project readme file
├── package.json            # Project dependencies and scripts
```

### Main Components:
1. **Navbar**: Provides navigation links for the product list, cart, and wishlist.
2. **ProductList**: Displays all available products with options to view details or add to the cart.
3. **ProductDescription**: Shows detailed information about a selected product.
4. **Cart**: Displays items in the cart with options to update quantities, move items to the wishlist, or remove them.
5. **Wishlist**: Shows items in the wishlist with options to move them to the cart or remove them.

## Usage

### Adding Items to Cart
- From the **Product List** page, click the "Add to Cart" button on any product to add it to your cart.

### Viewing the Cart
- Click on the **Cart** link in the navigation bar to view the items in your cart. You can update item quantities, remove items, or move them to the wishlist.

### Wishlist Management
- From the **Product Description** page, you can add items to the **Wishlist**.
- Go to the **Wishlist** via the navigation bar to view the items, move them to the cart, or remove them from the wishlist.

### Calculating Total Price
- The total price of items in your cart is automatically calculated and displayed in the cart.

### Moving Items Between Cart and Wishlist
- You can move items between the cart and wishlist using the provided buttons in both the cart and wishlist views.

## Contributing

### Issues and Suggestions
Feel free to submit issues or feature requests via the [issue tracker](https://github.com/your-username/ecomm/issues).

### Pull Requests
1. Fork the project.
2. Create your feature branch:
   ```bash
   git checkout -b feature/my-new-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/my-new-feature
   ```
5. Open a pull request.

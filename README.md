# MLP FilmRoll Pro

E-commerce platform for film photography supplies featuring dynamic product browsing, multi-criteria filtering, and responsive design.

## Overview

FilmRoll Pro is a film photography supply shop built with vanilla JavaScript, HTML5, and CSS3. The application provides an intuitive shopping experience with real-time cart management, advanced filtering, and mobile-responsive layouts.

## Features

**Product Catalog**
- 15+ film products with detailed specifications (brand, ISO, format, price)
- Dynamic product cards with images and descriptions
- Responsive grid layout adapting to screen sizes

**Shopping Cart**
- Real-time quantity adjustment
- Automatic price calculation
- Visual feedback for cart updates
- Persistent cart state during session

**Advanced Filtering**
- Multi-criteria search by brand and ISO rating
- Filter chip system with active state indicators
- Set-based filtering logic for accurate results
- Clear all filters option

**Responsive Design**
- CSS Grid and Flexbox layouts
- Mobile-first approach
- Touch-friendly UI elements
- Optimized for 320px to 1920px viewports

**Accessibility**
- ARIA labels for screen readers
- Keyboard navigation support
- Semantic HTML structure
- High contrast color scheme

## Tech Stack

**Frontend:** Vanilla JavaScript (ES6+), HTML5, CSS3  
**Styling:** CSS Grid, Flexbox, Custom Properties  
**Data Structures:** JavaScript Sets for efficient filtering

## Project Structure
```
cs361-Film-Roll-/
├── index.html          # Main application page
├── script.js           # Core functionality (cart, filters, product display)
├── style.css           # Responsive styling and layout
└── README.md
```

## How It Works

**Product Display**  
Products are dynamically rendered from a JavaScript object array. Each product includes metadata for brand, ISO, format, and pricing.

**Filter System**  
Uses JavaScript Sets to track active filters. When a filter is selected, the product list is re-rendered to show only matching items. Multiple filters within the same category use OR logic (e.g., "Kodak OR Fujifilm"), while categories use AND logic.

**Cart Management**  
Cart state is maintained in a JavaScript object. Quantity changes trigger immediate UI updates and price recalculation. The cart persists during the session but resets on page reload.

## Running Locally

1. Clone the repository
2. Open `index.html` in a web browser
3. No build process or dependencies required
```bash
git clone https://github.com/mlpm21/cs361-Film-Roll-.git
cd cs361-Film-Roll-
open index.html  # or double-click the file
```

## Future Enhancements

- Backend integration for order processing
- Local storage for cart persistence
- Product detail pages
- Checkout flow
- Image gallery lightbox

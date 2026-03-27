# MLP FilmRoll Pro

E-commerce platform for film photography supplies featuring dynamic product browsing, multi-criteria filtering, and promotional pricing.

## Overview

FilmRoll Pro is a film photography supply shop built with vanilla JavaScript, HTML5, and CSS3. The application provides an intuitive shopping experience with real-time cart management, advanced chip-based filtering system, and promotional discounts.

## Features

**Product Catalog**
- 15+ film products with detailed specifications (brand, ISO, format, price)
- Dynamic product cards with images and descriptions
- Promotional pricing system with percentage discounts and sale badges

**Shopping Cart**
- Real-time quantity adjustment
- Automatic price calculation
- Visual feedback for cart updates
- Persistent cart state during session

**Advanced Filtering**
- Multi-criteria chip-based filters using JavaScript Sets
- Brand and ISO rating filter combinations
- Active state indicators for selected filters
- Clear all filters option
- Search functionality across product names, brands, and ISO values

**Help System**
- FAQ slide-over panel with smooth animations
- Backdrop overlay with blur effect
- Keyboard navigation support (Escape key to close)
- ARIA accessibility labels

**Responsive Design**
- Flexbox layouts adapting to screen sizes
- Slide-over UI panels with smooth transitions
- Touch-friendly interface elements

## Tech Stack

- **JavaScript (ES6+)**: Dynamic filtering logic, cart management, promotional pricing calculations
- **HTML5**: Semantic markup, accessibility attributes
- **CSS3**: Flexbox layouts, transitions, custom styling
- **Design Patterns**: Set-based filtering, state management, event-driven UI updates

## Project Structure
```
├── index.html          # Main application structure
├── style.css           # Styling and layout
├── script.js           # Core application logic and filtering
└── faq-service.js      # FAQ data (currently local fallback)
```

## Key Implementation Details

**Multi-Criteria Filtering**: Uses JavaScript `Set` data structures to efficiently manage multiple active filters (brands and ISO ratings), allowing users to combine filter criteria.

**Promotional Pricing**: Implements a discount system where specific products have percentage-based promotions, displaying both original and discounted prices with visual badges.

**Responsive Flexbox**: Product grid uses `display: flex` with `flex-wrap: wrap` to automatically adapt layout based on available screen width.

**Slide-over Panels**: Shopping cart and FAQ panels use CSS transforms and transitions for smooth slide-in/out animations from the right edge of the screen.
```

```
Built e-commerce web application for film photography supplies featuring dynamic product catalog, real-time shopping cart management, and promotional pricing system with percentage discounts. Implemented multi-criteria filtering system using JavaScript Sets for brand and ISO rating filters, enabling users to combine multiple filter criteria. Developed responsive Flexbox layouts and slide-over UI panels with smooth animations.
```


```
JavaScript (ES6+), HTML5, CSS3, Flexbox
```


```
- Built e-commerce web application for film photography supplies featuring dynamic product catalog, real-time shopping cart management, and promotional pricing system with percentage discounts.

- Implemented multi-criteria filtering system using JavaScript Sets for brand and ISO rating filters, enabling users to combine multiple filter criteria with active state indicators.

- Developed responsive Flexbox layouts and slide-over UI panels with smooth animations, ensuring seamless user experience across different screen sizes.

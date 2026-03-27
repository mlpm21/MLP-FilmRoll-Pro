a# MLP FilmRoll Pro

E-commerce platform for film photography supplies featuring dynamic product browsing, multi-criteria filtering, and promotional pricing.

## Overview

FilmRoll Pro is a film photography supply shop built with vanilla JavaScript, HTML5, and CSS3. The application provides an intuitive shopping experience with real-time cart management, advanced chip-based filtering system, and promotional discounts.

## Features

**Product Catalog**
- 15+ film products with detailed specifications (brand, ISO, format, price)
- - Dynamic product cards with images and descriptions
  - - Promotional pricing system with percentage discounts and sale badges
    -
    - **Shopping Cart**
    - - Real-time quantity adjustment
      - - Automatic price calculation
        - - Visual feedback for cart updates
          - - Persistent cart state during session
            -
            - **Advanced Filtering**
            - - Multi-criteria chip-based filters using JavaScript Sets
              - - Brand and ISO rating filter combinations
                - - Active state indicators for selected filters
                  - - Clear all filters option
                    - - Search functionality across product names, brands, and ISO values
                      -
                      - **Help System**
                      - - FAQ slide-over panel with smooth animations
                        - - Backdrop overlay with blur effect
                          - - Keyboard navigation support (Escape key to close)
                            - - ARIA accessibility labels
                              -
                              - **Responsive Design**
                              - - Flexbox layouts adapting to screen sizes
                                - - Slide-over UI panels with smooth transitions
                                  - - Touch-friendly interface elements
                                    -
                                    - ## Tech Stack
                                    -
                                    - - **JavaScript (ES6+)**: Dynamic filtering logic, cart management, promotional pricing calculations
                                      - - **HTML5**: Semantic markup, accessibility attributes
                                        - - **CSS3**: Flexbox layouts, transitions, custom styling
                                          - - **Design Patterns**: Set-based filtering, state management, event-driven UI updates
                                            -
                                            - ## Project Structure
                                            -
                                            - ```
                                              ├── index.html          # Main application structure
                                              ├── style.css           # Styling and layout
                                              ├── script.js           # Core application logic and filtering
                                              └── faq-service.js      # FAQ data (currently local fallback)
                                              ```

                                              ## Key Implementation Details

                                              **Multi-Criteria Filtering**: Uses JavaScript `Set` data structures to efficiently manage multiple active filters (brands and ISO ratings), allowing users to combine filter criteria.

                                              **Promotional Pricing**: Implements a discount system where specific products have percentage-based promotions, displaying both original and discounted prices with visual badges.

                                              **Responsive Flexbox**: Product grid uses `display: flex` with `flex-wrap: wrap` to automatically adapt layout based on available screen width.

                                              **Slide-over Panels**: Shopping cart and FAQ panels use CSS transforms and transitions for smooth slide-in/out animations from the right edge of the screen.# MLP FilmRoll Pro

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

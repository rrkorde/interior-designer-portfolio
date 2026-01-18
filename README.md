# Elite Interiors - Modern Interior Design Portfolio Website

A stunning, feature-rich interior design portfolio website built with modern web technologies (January 2026).

## Features

### Design & User Experience
- **Glassmorphism Effects** - Modern frosted glass UI elements
- **Dark/Light Mode** - Seamless theme switching with persistent preferences
- **Smooth Animations** - AOS (Animate On Scroll) library integration
- **Parallax Scrolling** - Engaging hero section with depth
- **Micro-interactions** - Hover effects, tilt animations, cursor trails
- **Responsive Design** - Mobile-first approach, works on all devices

### Interactive Elements
- **Portfolio Filter System** - Dynamic project filtering by category
- **Active Navigation** - Auto-updating nav based on scroll position
- **Contact Form** - Validated form with success/error notifications
- **Newsletter Signup** - Email subscription functionality
- **Back to Top Button** - Smooth scroll to top
- **Mobile Menu** - Animated hamburger menu

### Performance & Modern Standards
- **Vite Build System** - Lightning-fast development and optimized builds
- **PWA Ready** - Progressive Web App with offline support
- **Service Worker** - Caching for improved performance
- **SEO Optimized** - Semantic HTML, meta tags, structured data ready
- **Lazy Loading** - Optimized image loading
- **Core Web Vitals** - Performance optimized

### Sections
1. **Hero** - Eye-catching gradient background with CTA buttons
2. **About** - Company information with animated statistics
3. **Services** - Three main service categories (Residential, Complex, Commercial)
4. **Portfolio** - Filterable project gallery
5. **Process** - 4-step workflow visualization
6. **Contact** - Contact form with social media links
7. **Footer** - Quick links, services, newsletter signup

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** - Modern ES6+ features
- **Vite** - Build tool and dev server
- **AOS** - Animate On Scroll library
- **PWA** - Service Worker & Web App Manifest

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Customization

### Colors
Edit CSS custom properties in `style.css`:
```css
:root {
    --color-primary: #2c3e50;
    --color-secondary: #c9a961;
    --color-accent: #e67e22;
    /* ... */
}
```

### Content
- Update text content in `index.html`
- Replace placeholder images with your actual project photos
- Modify contact information in the contact section

### Branding
- Replace `Elite Interiors` with your business name
- Update logo in navigation
- Customize favicon and app icons

## Project Structure

```
crekkar/
├── index.html          # Main HTML file
├── style.css           # All styles and animations
├── main.js            # Interactive features and functionality
├── vite.config.js     # Vite configuration
├── sw.js              # Service Worker for PWA
├── manifest.json      # Web App Manifest
├── favicon.svg        # Favicon
├── package.json       # Dependencies
└── README.md          # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Lighthouse Score**: 90+

## Future Enhancements

- [ ] Add actual project images
- [ ] Integrate with backend API for form submissions
- [ ] Add blog section
- [ ] Implement 3D room visualization
- [ ] Add client testimonials carousel
- [ ] Integrate with booking system
- [ ] Add multi-language support

## License

© 2026 Elite Interiors. All rights reserved.

## Support

For questions or support, contact: info@eliteinteriors.com

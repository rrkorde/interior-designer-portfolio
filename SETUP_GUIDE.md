# Setup & Customization Guide

## Quick Start

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```
The site will open automatically at `http://localhost:3000`

### Step 3: Build for Production
```bash
npm run build
```
Production files will be in the `dist/` folder.

## Customization Guide

### 1. Branding & Business Information

#### Update Business Name
Search and replace "Crekaar" with your business name in:
- [index.html](index.html) - Multiple locations
- [README.md](README.md)
- [manifest.json](manifest.json)

#### Update Contact Information
In [index.html](index.html), find the contact section and update:
```html
<div class="contact-value">+1 (555) 123-4567</div>  <!-- Your phone -->
<div class="contact-value">info@eliteinteriors.com</div>  <!-- Your email -->
<div class="contact-value">123 Design Street, NY 10001</div>  <!-- Your address -->
```

### 2. Colors & Theme

Edit [style.css](style.css) CSS variables:

```css
:root {
    /* Primary Colors */
    --color-primary: #2c3e50;      /* Main text color */
    --color-secondary: #c9a961;    /* Accent gold color */
    --color-accent: #e67e22;       /* Secondary accent */

    /* Gradients */
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --gradient-gold: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
}
```

### 3. Add Your Project Images

#### Replace Placeholder Images
The site currently uses placeholder SVG graphics. Replace them with your actual project photos:

1. Create an `images/` folder
2. Add your project images (recommended: WebP or AVIF format)
3. Update [index.html](index.html) portfolio section:

```html
<!-- Replace this: -->
<div class="placeholder-image">
    <svg>...</svg>
</div>

<!-- With this: -->
<img src="/images/project-1.webp" alt="Modern Villa Interior" loading="lazy">
```

#### Recommended Image Sizes
- Portfolio thumbnails: 800x600px
- Hero background: 1920x1080px
- About section: 600x750px

### 4. Content Updates

#### Services Section
Edit [index.html](index.html) to modify service offerings:

```html
<h3 class="service-title">Your Service Name</h3>
<p class="service-description">Your description...</p>
<ul class="service-features">
    <li>Feature 1</li>
    <li>Feature 2</li>
    <!-- Add more features -->
</ul>
```

#### About Section Statistics
Update the stats in [index.html](index.html):

```html
<div class="stat-number">500+</div>  <!-- Your projects count -->
<div class="stat-number">15+</div>   <!-- Your years experience -->
<div class="stat-number">98%</div>   <!-- Your satisfaction rate -->
```

#### Portfolio Projects
Add/remove projects in [index.html](index.html):

```html
<div class="portfolio-item" data-category="residential" data-aos="fade-up">
    <div class="portfolio-image">
        <img src="/images/your-project.webp" alt="Project Name">
        <div class="portfolio-overlay">
            <h3 class="portfolio-title">Project Name</h3>
            <p class="portfolio-category">Residential</p>
            <button class="portfolio-view-btn">View Project</button>
        </div>
    </div>
</div>
```

Categories available: `residential`, `complex`, `commercial`

### 5. Social Media Links

Update social links in [index.html](index.html) footer:

```html
<a href="https://instagram.com/yourhandle" class="social-link" aria-label="Instagram">
<a href="https://pinterest.com/yourhandle" class="social-link" aria-label="Pinterest">
<a href="https://linkedin.com/company/yourcompany" class="social-link" aria-label="LinkedIn">
```

### 6. SEO Optimization

Update meta tags in [index.html](index.html) `<head>`:

```html
<meta name="description" content="Your custom description">
<meta name="keywords" content="your, custom, keywords">
<title>Your Business Name - Tagline</title>
```

Add to [index.html](index.html) for better SEO:

```html
<!-- Open Graph for social sharing -->
<meta property="og:title" content="Your Business Name">
<meta property="og:description" content="Your description">
<meta property="og:image" content="/images/og-image.jpg">
<meta property="og:url" content="https://yourwebsite.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Your Business Name">
<meta name="twitter:description" content="Your description">
<meta name="twitter:image" content="/images/twitter-image.jpg">
```

### 7. Form Integration

The contact form currently shows notifications. To connect it to a backend:

#### Option 1: FormSpree (Easiest)
```html
<form class="contact-form glass-effect" id="contactForm"
      action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

#### Option 2: Custom API
Edit [main.js](main.js) line ~149:

```javascript
// Replace the simulation with actual API call
const response = await fetch('https://your-api.com/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

### 8. Analytics Integration

Add Google Analytics to [index.html](index.html) before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 9. Favicon & App Icons

#### Create Custom Favicon
1. Design a logo (square, 512x512px minimum)
2. Use a favicon generator (e.g., favicon.io)
3. Replace [favicon.svg](favicon.svg) with your design
4. Generate PNG icons for PWA:
   - icon-192.png (192x192px)
   - icon-512.png (512x512px)
5. Place icons in the root folder

Update [manifest.json](manifest.json):
```json
{
  "name": "Your Business Name",
  "short_name": "Your Name",
  "theme_color": "#yourcolor"
}
```

## Deployment Options

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Option 3: GitHub Pages
```bash
npm run build
# Upload dist/ folder contents
```

### Option 4: Traditional Hosting
1. Run `npm run build`
2. Upload contents of `dist/` folder to your web host
3. Point your domain to the hosting

## Performance Optimization

### Image Optimization
```bash
# Install image optimization tool
npm install -D vite-plugin-imagemin

# Images will be automatically optimized on build
```

### Enable Compression
Most hosting providers enable gzip/brotli automatically. If not, add to your server config.

### CDN Integration
For better global performance, use a CDN like Cloudflare or AWS CloudFront.

## Testing

### Browser Testing
Test on:
- Chrome (Windows, Mac, Android)
- Safari (Mac, iOS)
- Firefox (Windows, Mac)
- Edge (Windows)

### Responsive Testing
Test on these viewport sizes:
- Mobile: 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1440px, 1920px

### Lighthouse Audit
Run in Chrome DevTools:
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Generate report
4. Aim for 90+ scores

## Troubleshooting

### Issue: Animations not working
**Solution**: Ensure AOS is loaded. Check browser console for errors.

### Issue: Form not submitting
**Solution**: Check [main.js](main.js) form handler. Ensure you've configured a backend endpoint.

### Issue: Images not loading
**Solution**: Check file paths are correct and images are in the public directory.

### Issue: Dark mode not persisting
**Solution**: Check browser localStorage is enabled. Clear cache and try again.

## Support & Resources

### Documentation
- [Vite Documentation](https://vitejs.dev)
- [AOS Library](https://michalsnik.github.io/aos/)
- [MDN Web Docs](https://developer.mozilla.org)

### Need Help?
1. Check [README.md](README.md) for feature documentation
2. Review code comments in source files
3. Test in browser DevTools console for errors

## Next Steps

1. ✅ Replace placeholder images with your portfolio photos
2. ✅ Update all text content with your business information
3. ✅ Customize colors to match your brand
4. ✅ Connect contact form to your email
5. ✅ Add analytics tracking
6. ✅ Test on multiple devices
7. ✅ Deploy to production
8. ✅ Submit to search engines
9. ✅ Share on social media

Good luck with your stunning new website!

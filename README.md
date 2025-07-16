# Summon Experts

<p align="center">
  <img src="https://summonexperts.com/favicon.svg" alt="Summon Experts Logo" width="64" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?logo=typescript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.0-38bdf8?logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Netlify-Deploy-brightgreen?logo=netlify" />
</p>

<p align="center">
  <b>A modern, responsive landing page for Summon Experts</b><br/>
  <i>AI-powered business execution platform for founders & entrepreneurs</i>
</p>

<p align="center">
  🌐 <a href="https://summonexperts.com">Live Demo</a> •
      📧 <a href="mailto:adedirandamola.a@gmail.com">Email Us</a> •
  💬 <a href="#early-offer">Contact Form</a> •
      ✉️ <a href="mailto:bferrell514@gmail.com">Email</a>
</p>

---

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Elements**: Smooth scrolling, hover effects, and clickable CTAs
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Accessibility**: Proper semantic HTML and keyboard navigation

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, customizable icons
- **CSS3** - Custom styling with CSS variables

## 📱 Sections

1. **Hero Section** - Compelling headline with primary CTA
2. **What We're Building** - Platform overview and value proposition
3. **Who It's For** - Target audience identification
4. **What You Get** - Feature highlights with icons
5. **Why We're Different** - Competitive advantages
6. **Why Trust Us** - Founder profiles and credibility
7. **Early Offer** - Special pricing and contact information
8. **Footer** - Contact details and social links

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

### Option 1: Netlify (Recommended)

1. **Manual Deployment**:
   - Run `npm run build`
   - Drag the `dist` folder to Netlify
   - Your site will be live instantly

2. **GitHub Integration**:
   - Connect your GitHub repo to Netlify
   - Enable auto-deploy on push
   - Netlify will build and deploy automatically

### Option 2: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

### Option 3: GitHub Pages

1. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Run `npm run deploy`

## 🎨 Customization

### Colors
Update CSS variables in `src/App.css`:
```css
:root {
  --primary-color: #1a1a2e;
  --accent-color: #00d4aa;
  /* ... other variables */
}
```

### Content
Edit the content in `src/App.jsx` to match your brand and messaging.

### Fonts
The site uses Inter and Manrope fonts. Change the Google Fonts import in `src/App.css`.

## 📞 Contact Integration

The landing page includes:
- **SMS Integration**: Click phone numbers to open SMS app
- **Email Links**: Direct email composition
- **Social Links**: GitHub, LinkedIn, and portfolio links

## 🔧 Performance Optimizations

- **Code Splitting**: Automatic with Vite
- **Image Optimization**: SVG icons for crisp display
- **CSS Optimization**: Purged unused styles in production
- **Lazy Loading**: Images and components load as needed

## 📊 Analytics Ready

Add your analytics tracking code to `index.html`:
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

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to Summon Experts.

---

**Built with ❤️ for early-stage entrepreneurs**

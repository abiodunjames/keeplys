# DigitalKeep Landing Page

A modern, multilingual landing page for **DigitalKeep** — a document scanning and organization app available on iOS and Android.

![Jekyll](https://img.shields.io/badge/Jekyll-4.3-CC0000?style=flat&logo=jekyll)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Responsive](https://img.shields.io/badge/Responsive-Yes-success)

## 🌟 Overview

This landing page showcases DigitalKeep's features and provides download links for the mobile app. Built with Jekyll for static site generation, it features a clean, modern design with full internationalization support.

**Live Site:** [https://digitalkeep.app](https://digitalkeep.app)

---

## ✨ Features

### Design & UX
- **Modern Flat Design** — Clean aesthetic with DM Sans & DM Serif Display typography
- **Fully Responsive** — Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** — Scroll-triggered animations with reduced motion support
- **Phone Mockup** — Interactive CSS-only phone preview in hero section
- **Custom Scrollbar** — Styled scrollbar matching the color scheme

### Internationalization (i18n)
- **4 Languages Supported:** English, German (Deutsch), Italian (Italiano), Spanish (Español)
- **Language Switcher** — Dropdown in navigation with mobile support
- **Translated Legal Pages** — Privacy Policy and Terms of Service in all languages

### Technical
- **Jekyll 4.3** — Fast static site generation
- **SEO Optimized** — Meta tags, Open Graph, Twitter Cards via `jekyll-seo-tag`
- **Auto Sitemap** — Generated via `jekyll-sitemap` plugin
- **CSS Custom Properties** — Themeable design system
- **Font Awesome 6** — Line icon system
- **No JavaScript Framework** — Vanilla JS for lightweight performance

---

## 📁 Project Structure

```
DigitalKeepLandingPage/
├── _config.yml           # Jekyll configuration
├── _data/                # Translation files
│   ├── en.yml           # English translations
│   ├── de.yml           # German translations
│   ├── es.yml           # Spanish translations
│   └── it.yml           # Italian translations
├── _includes/            # Reusable components
│   ├── header.html      # Navigation & language switcher
│   ├── hero.html        # Hero section with phone mockup
│   ├── features.html    # Features grid
│   ├── how-it-works.html # Step-by-step section
│   ├── download.html    # CTA section
│   └── footer.html      # Footer with links
├── _layouts/
│   └── default.html     # Base layout template
├── assets/
│   ├── css/
│   │   └── main.css     # All styles (CSS custom properties)
│   ├── images/
│   │   └── favicon.svg  # Site favicon
│   └── js/
│       └── main.js      # JavaScript (menu, animations)
├── de/                   # German pages
│   ├── index.html
│   ├── privacy.html
│   └── terms.html
├── es/                   # Spanish pages
│   ├── index.html
│   ├── privacy.html
│   └── terms.html
├── it/                   # Italian pages
│   ├── index.html
│   ├── privacy.html
│   └── terms.html
├── index.html            # English homepage
├── privacy.html          # English privacy policy
├── terms.html            # English terms of service
├── Gemfile               # Ruby dependencies
└── Gemfile.lock
```

---

## 🚀 Getting Started

### Prerequisites

- **Ruby** (version 2.7 or higher)
- **Bundler** (`gem install bundler`)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/digitalkeep-landing.git
   cd digitalkeep-landing
   ```

2. **Install dependencies:**
   ```bash
   bundle install
   ```

3. **Run the development server:**
   ```bash
   bundle exec jekyll serve
   ```

4. **Open in browser:**
   Navigate to [http://localhost:4000](http://localhost:4000)

### Build for Production

```bash
bundle exec jekyll build
```

The static site will be generated in the `_site/` directory.

---

## 🌐 Adding a New Language

1. **Create the translation file** in `_data/`:
   ```yaml
   # _data/fr.yml
   lang_name: "Français"
   lang_code: "fr"
   
   nav:
     features: "Fonctionnalités"
     # ... rest of translations
   ```

2. **Add the language to `_config.yml`:**
   ```yaml
   languages: ["en", "de", "it", "es", "fr"]
   ```

3. **Create language-specific pages:**
   ```
   fr/
   ├── index.html
   ├── privacy.html
   └── terms.html
   ```

4. **Update navigation** in `_includes/header.html` and `_includes/footer.html`

---

## 🎨 Customization

### Color Scheme

All colors are defined as CSS custom properties in `assets/css/main.css`:

```css
:root {
  /* Primary Brand Colors */
  --color-primary: #1E40AF;        /* Deep Indigo Blue */
  --color-primary-light: #3B82F6;
  --color-primary-dark: #1E3A8A;
  
  /* Accent - Warm Amber */
  --color-accent: #F59E0B;
  --color-accent-light: #FCD34D;
  --color-accent-dark: #D97706;
  
  /* ... more color tokens */
}
```

### Typography

The site uses Google Fonts:
- **Headlines:** DM Serif Display
- **Body:** DM Sans

To change fonts, update the font links in `_layouts/default.html` and the CSS variables:

```css
:root {
  --font-display: 'Your Headline Font', serif;
  --font-body: 'Your Body Font', sans-serif;
}
```

### App Store Links

Update the download links in `_config.yml`:

```yaml
app_store_url: "https://apps.apple.com/app/your-app-id"
play_store_url: "https://play.google.com/store/apps/details?id=your.app.package"
```

---

## 📱 Page Sections

| Section | Description |
|---------|-------------|
| **Hero** | Main headline, description, app store buttons, animated phone mockup |
| **Features** | 6-card grid showcasing app capabilities |
| **How It Works** | 3-step guide to getting started |
| **Download** | Final CTA with download buttons |
| **Footer** | Navigation, legal links, language selector |

---

## 🔧 Configuration Reference

### `_config.yml` Options

| Option | Description | Default |
|--------|-------------|---------|
| `title` | Site title | DigitalKeep |
| `description` | Site description | Digitize, Store, and Organize Your Documents |
| `url` | Production URL | https://digitalkeep.app |
| `default_lang` | Default language | en |
| `languages` | Supported languages array | ["en", "de", "it", "es"] |
| `app_store_url` | iOS App Store link | — |
| `play_store_url` | Google Play Store link | — |
| `twitter` | Twitter handle | digitalkeep |
| `google_analytics` | GA tracking ID (optional) | — |

---

## 📦 Dependencies

### Ruby Gems

| Gem | Version | Purpose |
|-----|---------|---------|
| `jekyll` | ~> 4.3 | Static site generator |
| `jekyll-seo-tag` | latest | SEO meta tags |
| `jekyll-sitemap` | latest | Automatic sitemap generation |

### External Resources

| Resource | Version | Purpose |
|----------|---------|---------|
| Font Awesome | 6.5.1 | Icons |
| Google Fonts | — | DM Sans & DM Serif Display typography |

---

## 🚢 Deployment

### GitHub Pages

1. Push to a `gh-pages` branch or enable Pages in repository settings
2. Ensure `baseurl` is set correctly in `_config.yml` if using a project subdirectory

### Netlify

1. Connect your repository to Netlify
2. Set build command: `bundle exec jekyll build`
3. Set publish directory: `_site`

### Vercel

1. Import your repository
2. Framework preset: Jekyll
3. Deploy!

### Custom Server

Upload the contents of `_site/` to your web server's public directory.

---

## 📄 Legal Pages

The site includes Privacy Policy and Terms of Service pages:

- **English:** `/privacy/` and `/terms/`
- **German:** `/de/privacy/` and `/de/terms/`
- **Italian:** `/it/privacy/` and `/it/terms/`
- **Spanish:** `/es/privacy/` and `/es/terms/`

⚠️ **Important:** Review and customize the legal content to match your app's actual data practices and terms.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Jekyll](https://jekyllrb.com/) — Static site generator
- [Font Awesome](https://fontawesome.com/) — Icon library
- [Google Fonts](https://fonts.google.com/) — Typography

---

<p align="center">
  Made with ♥ for <strong>DigitalKeep</strong>
</p>


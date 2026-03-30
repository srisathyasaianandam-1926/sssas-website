# Academia — School Website

A professional school website built with **React 19 + Vite + Tailwind CSS v4 + Framer Motion**.

---

## 🎨 Design

- **Color Scheme:** Maroon (`#6B1A2A`) + Gold (`#C9963A`) + Cream (`#FDFAF5`)
- **Display Font:** Cormorant Garamond (serif, Google Fonts)
- **Body Font:** DM Sans (Google Fonts)
- **Inspired by:** sssihl.edu.in — institutional, dignified, professional

---

## 📁 Project Structure

```
src/
├── index.css              ← Global theme (CSS variables, Tailwind v4)
├── main.jsx               ← React entry point
├── App.jsx                ← Router + layout
├── assets/
│   ├── video.mp4          ← Hero background video (place your video here)
│   └── hero.png           ← Fallback hero image
├── components/
│   ├── Navbar.jsx         ← Ticker + nav + mobile drawer
│   └── Footer.jsx         ← 4-column footer
└── pages/
    ├── Home.jsx           ← ALL home sections (single file)
    ├── School.jsx
    ├── Academics.jsx
    ├── Hostel.jsx
    ├── About.jsx
    ├── Admissions.jsx
    └── Contact.jsx
```

> **CSS Pattern:** Each file has a `const FILE_STYLES` constant at the bottom
> containing all CSS for that component. Edit it directly to customise styles.

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Add your video
Place your campus video at:
```
src/assets/video.mp4
```

### 3. Start the development server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```

---

## 🎯 Home Page Sections

The entire home page is in `src/pages/Home.jsx` as a single file:

| Section | Component |
|---|---|
| Full-screen video hero | `HeroSection` |
| Animated stat counters | `StatsSection` |
| Quick access cards | `QuickLinksSection` |
| About preview | `AboutSection` |
| Academic programs | `ProgramsSection` |
| News & Events | `NewsEventsSection` |
| Auto-scroll gallery | `GalleryStrip` |
| Testimonials | `TestimonialsSection` |
| Admissions CTA | `CTASection` |

---

## 🔑 Key Features

- ✅ Announcement ticker (auto-scrolling, pauses on hover)
- ✅ Framer Motion v11 compatible (`useMotionValueEvent`)
- ✅ Working mobile drawer with AnimatePresence
- ✅ Animated stat counters with `useInView`
- ✅ Working contact & admissions forms with state
- ✅ Auto-scrolling gallery strip
- ✅ Fully responsive on all screen sizes
- ✅ CSS-at-bottom pattern for easy editing

---

## 🎨 Customisation

### Change school name
Search & replace `Academia` across all files.

### Change colors
Edit `src/index.css` — the `@theme` block at the top:
```css
--color-maroon:      #6B1A2A;
--color-gold:        #C9963A;
--color-cream:       #FDFAF5;
```

### Edit a page's styles
Go to the bottom of each `.jsx` file and find the `const PAGE_STYLES` constant.
All CSS for that page is right there.

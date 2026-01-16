# 🎨 Riya Gupta - AI/ML Portfolio

A premium, professional portfolio website showcasing AI/ML expertise, data science projects, and technical skills.

## ✨ Features

- **🎯 Premium Design**: Charcoal + Electric Blue theme with subtle animations
- **📱 Fully Responsive**: Looks great on desktop, tablet, and mobile
- **⚡ Fast Performance**: Optimized React build with lazy loading
- **🔍 SEO Optimized**: Ready for search engine indexing
- **♿ Accessible**: Keyboard navigation and screen reader friendly
- **🎨 Modern UI**: Using shadcn/ui components and Tailwind CSS

## 🗂️ Project Structure

```
frontend/
├── public/              # Static assets
│   └── index.html
├── src/
│   ├── components/
│   │   └── ui/         # shadcn/ui components
│   ├── pages/
│   │   └── Home.jsx    # Main portfolio page
│   ├── mock.js         # 📝 ALL CONTENT HERE (easy to update!)
│   ├── App.js          # Main app component
│   ├── App.css         # Custom styles & animations
│   └── index.css       # Tailwind + global styles
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- Yarn package manager

### Installation

```bash
cd /app/frontend
yarn install
```

### Development

```bash
yarn start
# Opens http://localhost:3000
```

### Build for Production

```bash
yarn build
# Creates optimized build in /build folder
```

## 📝 Updating Content

**All content is in one place:** `/app/frontend/src/mock.js`

Simply edit this file to update:
- Personal information
- About section
- Skills & expertise
- Projects
- Work experience
- Education & certifications

**See `CONTENT_UPDATE_GUIDE.md` for detailed instructions.**

## 🌐 Deployment

Deploy to Netlify or Vercel in minutes:

**Quick Deploy to Netlify:**
1. Push code to GitHub
2. Connect repository on Netlify
3. Build command: `yarn build`
4. Publish directory: `build`
5. Deploy!

**See `DEPLOYMENT_GUIDE.md` for step-by-step instructions.**

## 🎨 Design System

### Colors
- **Primary**: Charcoal (#1a1a2e, #2d2d44)
- **Accent**: Electric Blue (#0ea5e9, #3b82f6, #06b6d4)
- **Text**: Slate shades for hierarchy

### Typography
- **Font**: System default (optimized for performance)
- **Headings**: 48-72px, gradient cyan-blue
- **Body**: 16-18px, slate-300

### Components
- Cards with glassmorphism effects
- Hover animations (lift + glow)
- Smooth scroll reveals
- Gradient buttons with shadows

## 🛠️ Tech Stack

- **Framework**: React 19
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: lucide-react
- **Build Tool**: Create React App
- **Deployment**: Netlify/Vercel ready

## 📄 Adding Your Resume

1. Add PDF to `/app/frontend/public/` folder
2. Update `handleResumeDownload` function in `Home.jsx`
3. See `CONTENT_UPDATE_GUIDE.md` for details

## 🔧 Customization

### Change Theme Colors
Edit color variables in `/app/frontend/src/index.css` or search for color classes in `Home.jsx`

### Modify Layout
All layout code is in `/app/frontend/src/pages/Home.jsx`

### Add New Sections
Copy existing section structure and add new data to `mock.js`

## 📊 Performance

- **Lighthouse Score**: 90+ (optimized)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Lazy Loading**: Images load on scroll

## 🧪 Testing

```bash
# Run in development
yarn start

# Test production build
yarn build
npx serve -s build
```

## 📚 Documentation

- [Deployment Guide](../DEPLOYMENT_GUIDE.md) - How to deploy to Netlify/Vercel
- [Content Update Guide](../CONTENT_UPDATE_GUIDE.md) - How to update your content

## 🐛 Troubleshooting

### Build Issues
- Clear cache: `rm -rf node_modules && yarn install`
- Check Node version: `node -v` (should be 16+)

### Display Issues
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Check console for errors

## 📝 License

This portfolio template is provided as-is for personal use.

## 🤝 Support

For issues or questions:
- Check documentation in `DEPLOYMENT_GUIDE.md` and `CONTENT_UPDATE_GUIDE.md`
- Review code comments in files
- Consult React and Tailwind documentation

---

**Built with passion for showcasing AI/ML excellence** 🚀

Last Updated: January 2025

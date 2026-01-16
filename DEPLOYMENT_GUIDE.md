# 🚀 Portfolio Deployment Guide

## Overview
Your portfolio is a static React website that can be deployed to various hosting platforms. This guide covers deployment to **Netlify** and **Vercel** - both offer free tiers, automatic HTTPS, and easy deployment from GitHub.

---

## 📋 Prerequisites

1. **GitHub Account** - Create one at [github.com](https://github.com)
2. **Git Installed** - Download from [git-scm.com](https://git-scm.com)
3. **Your Resume PDF** (optional for now - you can add later)

---

## 🔧 Step 1: Prepare Your Code for Deployment

### A. Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `portfolio` (or any name you prefer)
3. Set to **Public** or **Private**
4. Click **Create repository**

### B. Push Your Code to GitHub

Run these commands from your project root (`/app/frontend`):

```bash
cd /app/frontend

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## 🌐 Option 1: Deploy to Netlify (Recommended)

### Why Netlify?
- ✅ Super simple setup
- ✅ Automatic deployments on every push
- ✅ Free custom domain support
- ✅ Great performance

### Steps:

1. **Go to [netlify.com](https://netlify.com)**
2. Click **Sign up** → Choose **GitHub** to sign in
3. Click **Add new site** → **Import an existing project**
4. Choose **GitHub** and authorize Netlify
5. Select your `portfolio` repository
6. Configure build settings:
   - **Build command:** `yarn build`
   - **Publish directory:** `build`
   - Leave everything else as default
7. Click **Deploy site**

### Your site will be live in 2-3 minutes! 🎉

**Custom Domain (Optional):**
- Go to **Site settings** → **Domain management**
- Click **Add custom domain**
- Follow instructions to connect your domain

**Update the Site:**
- Just push changes to GitHub
- Netlify automatically rebuilds and deploys

---

## ⚡ Option 2: Deploy to Vercel

### Why Vercel?
- ✅ Made by Next.js creators (great React support)
- ✅ Lightning-fast builds
- ✅ Excellent performance
- ✅ Free SSL certificates

### Steps:

1. **Go to [vercel.com](https://vercel.com)**
2. Click **Sign Up** → Choose **GitHub**
3. Click **Add New** → **Project**
4. **Import** your GitHub repository
5. Configure project:
   - **Framework Preset:** Create React App
   - **Build Command:** `yarn build`
   - **Output Directory:** `build`
   - **Install Command:** `yarn install`
6. Click **Deploy**

### Your site will be live in 2-3 minutes! 🎉

**Custom Domain (Optional):**
- Go to **Settings** → **Domains**
- Add your custom domain and follow instructions

**Update the Site:**
- Push changes to GitHub
- Vercel automatically redeploys

---

## 🎯 Post-Deployment Checklist

### Test Everything:
- [ ] Hero section loads with your photo
- [ ] All navigation links work
- [ ] Project cards display correctly
- [ ] Social media links open correctly
- [ ] Mobile view works well
- [ ] Resume download button shows alert

### Performance Check:
- Visit [PageSpeed Insights](https://pagespeed.web.dev)
- Enter your deployed URL
- Aim for 90+ score

---

## 📱 Custom Domain Setup (Optional)

If you want a custom domain like `riyagupta.com`:

1. **Buy a domain:**
   - [Namecheap](https://namecheap.com)
   - [Google Domains](https://domains.google)
   - [GoDaddy](https://godaddy.com)

2. **Connect to Netlify/Vercel:**
   - Both platforms provide clear instructions
   - Usually takes 24-48 hours for DNS propagation

---

## 🔄 How to Update Your Portfolio Later

See `CONTENT_UPDATE_GUIDE.md` for detailed instructions on:
- Updating your information
- Adding new projects
- Changing colors/design
- Adding your resume PDF

---

## 🆘 Troubleshooting

### Build fails on Netlify/Vercel?
- Check build logs for errors
- Ensure `package.json` and `yarn.lock` are committed
- Try building locally first: `yarn build`

### Site looks different than localhost?
- Clear browser cache
- Check if all assets loaded (images, fonts)
- Verify environment variables if any

### Images not loading?
- Ensure image URLs are absolute (starting with `https://`)
- Check browser console for errors

---

## 📊 Analytics (Optional)

Track visitors with **Google Analytics**:

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get your tracking ID (GA4 measurement ID)
3. Add to your site:
   ```bash
   yarn add react-ga4
   ```
4. Add tracking code to `App.js`

---

## 🎓 Next Steps

1. ✅ Deploy to Netlify or Vercel
2. 📱 Test on mobile devices
3. 🔗 Share your portfolio link on LinkedIn
4. 📄 Add your resume PDF (see `CONTENT_UPDATE_GUIDE.md`)
5. 🎨 Customize further as needed

---

## 💡 Pro Tips

- **Use Netlify** if you want the simplest setup
- **Use Vercel** if you plan to add more advanced features later
- Both platforms have excellent documentation and support
- You can always switch between them later
- Keep your GitHub repo updated - it's your backup

---

**Need Help?** Both Netlify and Vercel have excellent documentation and community support forums.

**Congratulations! Your portfolio is now live and ready to impress recruiters! 🎉**
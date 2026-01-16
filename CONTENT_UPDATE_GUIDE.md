# 📝 Content Update Guide

## Overview
This guide explains how to update your portfolio content without touching the design or complex code. All your personal data is centralized in `/app/frontend/src/mock.js` for easy updates.

---

## 🎯 Quick Start: Where to Make Changes

All content is in **ONE FILE**: `/app/frontend/src/mock.js`

This file contains:
- Personal information
- About section text
- Skills lists
- Projects details
- Work experience
- Education & certifications

---

## 📋 Step-by-Step Content Updates

### 1️⃣ Update Personal Information

**File:** `/app/frontend/src/mock.js`

**What to change:**
```javascript
export const personalInfo = {
  name: "Riya Gupta",  // ← Change your name here
  headline: "AI/ML | Data Science | Product & Business Analytics",  // ← Update your title
  intro: "Your introduction text here...",  // ← Update your intro
  profileImage: "https://...",  // ← Your photo URL (keep current or update)
  links: {
    linkedin: "https://linkedin.com/in/yourprofile",  // ← Update your links
    github: "https://github.com/yourusername",
    email: "your.email@example.com"
  }
};
```

---

### 2️⃣ Update About Section

**File:** `/app/frontend/src/mock.js`

```javascript
export const about = {
  description: "Write your about text here. Keep it professional and focused on your expertise, experience, and what makes you unique."
};
```

**Tips:**
- Keep it 100-150 words
- Focus on achievements and skills
- Mention your career goals
- Use active voice

---

### 3️⃣ Update Skills

**File:** `/app/frontend/src/mock.js`

```javascript
export const skills = {
  technical: [
    { name: "Python", category: "Programming" },
    { name: "Machine Learning", category: "AI/ML" },
    // Add more skills
  ],
  tools: [
    "Pandas", "NumPy", "TensorFlow",
    // Add/remove tools
  ],
  business: [
    "Product Thinking",
    "Business Analysis",
    // Add/remove soft skills
  ]
};
```

---

### 4️⃣ Add/Update Projects

**File:** `/app/frontend/src/mock.js`

```javascript
export const projects = [
  {
    id: 1,  // ← Keep incrementing for new projects
    title: "Your Project Name",
    description: "Brief, impact-focused description (1-2 sentences)",
    techStack: ["Tech1", "Tech2", "Tech3"],  // Technologies used
    github: "https://github.com/yourusername/repo",  // Your repo link
    image: "https://images.unsplash.com/..."  // Project image URL
  },
  // Add more projects by copying this structure
];
```

**To add a new project:**
1. Copy an existing project block
2. Increment the `id`
3. Update all fields
4. Save the file

**To remove a project:**
- Delete the entire project block (including curly braces)

---

### 5️⃣ Update Work Experience

**File:** `/app/frontend/src/mock.js`

```javascript
export const experience = [
  {
    id: 1,
    role: "Your Job Title",
    company: "Company Name",
    duration: "2023 - 2024",
    description: "Brief overview of your role",
    highlights: [
      "Key achievement 1",
      "Key achievement 2",
      "Key achievement 3"
    ]
  },
  // Add more experiences
];
```

---

### 6️⃣ Update Education & Certifications

**File:** `/app/frontend/src/mock.js`

```javascript
export const education = {
  degree: "B.Tech in Artificial Intelligence & Machine Learning",
  institution: "Your University Name",  // ← Update university
  year: "2021 - 2025",
  certifications: [
    {
      name: "Certification Name",
      issuer: "Issuing Organization",
      year: "2024"
    },
    // Add more certifications
  ]
};
```

---

## 📄 Adding Your Resume PDF

### Step 1: Upload Resume to Your Repository

1. Add your resume PDF to `/app/frontend/public/` folder:
   ```bash
   /app/frontend/public/Riya_Gupta_Resume.pdf
   ```

### Step 2: Update the Resume Download Function

**File:** `/app/frontend/src/pages/Home.jsx`

Find this function:
```javascript
const handleResumeDownload = () => {
  // Mock download action
  alert('Resume download will be implemented with your PDF file!');
};
```

Replace with:
```javascript
const handleResumeDownload = () => {
  // Create a link and trigger download
  const link = document.createElement('a');
  link.href = '/Riya_Gupta_Resume.pdf';  // ← Your resume filename
  link.download = 'Riya_Gupta_Resume.pdf';
  link.click();
};
```

### Step 3: Test
- Refresh your site
- Click "Download Resume" button
- Your PDF should download

---

## 🎨 Simple Design Tweaks

### Change Colors

**File:** `/app/frontend/src/index.css`

Current theme uses Charcoal + Electric Blue. To change:

```css
/* Find these color variables */
--cyan-400: #22d3ee;    /* ← Change to your color */
--cyan-500: #06b6d4;
--blue-500: #3b82f6;
--blue-600: #2563eb;
```

Or search for color classes in `Home.jsx`:
- `text-cyan-400` → Your text color
- `bg-cyan-500` → Your background color
- `from-cyan-500 to-blue-600` → Gradient colors

### Change Profile Photo

**Option 1: Use uploaded photo**
1. Add new photo to `/app/frontend/public/`
2. Update `profileImage` in `mock.js`:
   ```javascript
   profileImage: "/your-photo.jpg"
   ```

**Option 2: Use URL**
- Keep using the current URL format
- Just replace the URL in `mock.js`

---

## 🔄 Development Workflow

### Testing Changes Locally

```bash
cd /app/frontend

# Start development server
yarn start

# Open http://localhost:3000 in browser
# Make changes to mock.js
# Save and see updates immediately
```

### Deploying Changes

```bash
# After making changes
git add .
git commit -m "Update: describe your changes"
git push

# Netlify/Vercel will auto-deploy (2-3 minutes)
```

---

## 📱 Finding Good Project Images

If you need to replace project images:

**Free image sources:**
- [Unsplash](https://unsplash.com) - High-quality free photos
- [Pexels](https://pexels.com) - Free stock photos
- [Pixabay](https://pixabay.com) - Free images

**Search terms for tech projects:**
- "data visualization"
- "artificial intelligence abstract"
- "technology background"
- "neural network"
- "code screen"

**How to use:**
1. Find an image you like
2. Copy the image URL
3. Paste in the `image` field in your project in `mock.js`

---

## ⚡ Quick Reference

| What to Update | File | Section |
|----------------|------|----------|
| Name, Title, Intro | `mock.js` | `personalInfo` |
| About paragraph | `mock.js` | `about` |
| Skills & tools | `mock.js` | `skills` |
| Projects | `mock.js` | `projects` |
| Experience | `mock.js` | `experience` |
| Education | `mock.js` | `education` |
| Resume PDF | `public/` folder + `Home.jsx` | `handleResumeDownload` |
| Colors | `index.css` | CSS variables |

---

## 🆘 Common Issues

### Changes not showing up?
1. Hard refresh browser: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. Clear browser cache
3. Check if you saved the file
4. Restart dev server (`yarn start`)

### Image not displaying?
- Ensure URL starts with `https://`
- Check if image URL is valid (open in new tab)
- Use a different image source

### Site not deploying?
- Check build logs on Netlify/Vercel
- Ensure no syntax errors in `mock.js`
- Verify all closing brackets and quotes

---

## 💡 Content Writing Tips

### Project Descriptions
✅ **Good:** "NLP-based resume–job matching system using TF-IDF, achieving 85% accuracy in automated screening."

❌ **Avoid:** "This is a project where I used NLP to match resumes with jobs and it was really cool."

### About Section
- Start with your current role/aspiration
- Highlight 2-3 key strengths
- Mention 1-2 notable achievements
- End with your career goal

### Headlines
- Keep under 60 characters
- Use " | " to separate areas
- Lead with your strongest skill

---

## 🎓 Need More Help?

**Documentation:**
- React: [react.dev](https://react.dev)
- Tailwind CSS: [tailwindcss.com](https://tailwindcss.com)

**Questions?**
- Check the code comments in `mock.js`
- Review this guide
- Google specific issues

---

**Remember:** The beauty of this setup is that 95% of content changes only require editing `mock.js`. You don't need to touch any complex code! 🎉
# Gorish — Developer Portfolio Website

A clean, modern, responsive personal portfolio website for **Gorish**, First-Year B.Tech student at Rishihood University, aspiring AI technologist, and software developer.

Built with **pure HTML5, CSS3, and JavaScript** — zero frameworks, zero build steps, and ultra-fast load times.

---

## 🚀 Features

- **Aesthetic Developer Theme**: Modern dark aesthetic with ambient glows, glassmorphism (`backdrop-filter`), and crisp typography (Inter, Plus Jakarta Sans, Fira Code).
- **Interactive Terminal Hero**: Features an interactive pseudo-terminal highlighting your developer identity, education, mindset, and active status.
- **Structured Sections**:
  - **About Me**: Academic background at Rishihood University, mindset, and long-term ambition.
  - **Skills & Toolkit**: Categorized skills in Programming (Python), Developer Tools (Git, GitHub, CLI), and Areas of Interest (AI/ML, Math, Quant).
  - **Projects**: Clean project cards for *Log File Explorer*, *Git & GitHub Practice*, and *Future AI Project*.
  - **Currently Learning**: Foundations tracker covering Python, computer systems, git workflows, and math.
  - **Philosophy & Vision**: Four pillars (*Understand First*, *Build to Learn*, *Improve Consistently*, *Stay Curious*) and long-term vision manifesto.
  - **Let's Connect**: Direct contact card with instant **"Copy Email"** button, GitHub & LinkedIn links, and a contact form.
- **Fully Responsive**: Mobile drawer navigation menu with smooth hamburger transition.
- **SEO & Social Ready**: Includes OpenGraph meta tags, viewport tags, and inline SVG favicon.

---

## 📁 File Structure

```text
├── index.html       # Semantic HTML5 markup with all portfolio content
├── style.css        # Modern CSS design system, responsive breakpoints, animations
├── script.js        # Mobile drawer navigation, scrollspy, copy-to-clipboard, mailto form
└── README.md        # Documentation and deployment guide
```

---

## 🛠️ Customization Before Deploying

Open `index.html` and look for the following items:
1. **Email Address**:
   - Search for `gorish@example.com` and replace it with your real email address.
   - Search for `mailto:your.email@example.com` in the contact section and update it.
2. **LinkedIn Profile**:
   - Search for `https://linkedin.com/` and update it with your actual profile link (e.g. `https://linkedin.com/in/your-username`).
3. **GitHub Profile**:
   - Currently linked to `https://github.com/gorish-24`. Update repository links if you have dedicated repos for `Log File Explorer`.

---

## 🌐 How to Deploy (Choose Any Option)

### Option 1: GitHub Pages (Recommended & 100% Free)
Because your repository is already linked with GitHub, deploying with GitHub Pages takes less than 1 minute:

1. Commit and push your code to GitHub:
   ```bash
   git add index.html style.css script.js README.md
   git commit -m "Add responsive portfolio website"
   git push origin gorish
   ```
2. Go to your repository on GitHub (`https://github.com/gorish-24/...`).
3. Click on **Settings** (top right tab).
4. On the left sidebar, click **Pages**.
5. Under **Branch**, select your branch (e.g. `gorish` or `main`) and root `/ (root)`, then click **Save**.
6. In ~60 seconds, GitHub will give you a live URL:
   `https://gorish-24.github.io/...`

---

### Option 2: Vercel (Instant & Fast)
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New...** -> **Project**.
3. Select your repository and click **Deploy**.
4. Vercel automatically deploys static HTML/CSS sites and provides a free `.vercel.app` URL with automatic SSL.

---

### Option 3: Netlify (Drag & Drop or Git)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop your project folder directly into the browser window.
3. Your site goes live instantly with a free URL!

---

## 💻 Local Preview

You can preview the website immediately on your computer:
- **Double click** `index.html` to open it in Chrome, Safari, or your default browser.
- Or run a lightweight local server in Terminal:
  ```bash
  python3 -m http.server 3000
  ```
  Then open `http://localhost:3000` in your browser.


# Rakshitha — Personal Portfolio Website

A clean, modern, and recruiter-friendly personal portfolio website built for **Rakshitha**, Computer Science & Engineering Undergraduate at Mangalore Institute of Technology & Engineering (MITE).

---

## 🌟 Highlights & Features

- **Strict Resume Grounding**: Accurately reflects Rakshitha's academic records (CGPA 8.21), technical proficiencies, project work, verified certifications, and hackathon participations without inflated metrics.
- **Modern & Responsive UI**: Designed with a high-contrast dark theme (default) and clean light theme with seamless toggle switching.
- **Interactive Project Modals**: Deep-dive modals for each project highlighting the problem statement, proposed solution, key features, and technical architecture.
- **Verified Credentials & Certificate Previews**: Direct links to official academy verification portals (NxtWave, NPTEL) and modal document viewers.
- **Interactive Contact Features**: Direct email composer integration, phone number display, one-click copy buttons with toast notifications, and form validation.
- **Zero-Dependency Architecture**: Built using pure semantic HTML5, CSS3, and modern vanilla JavaScript.

---

## 📁 Project Structure

```text
my_portfolio/
├── index.html                 # Main portfolio page with semantic layout & ARIA accessibility
├── package.json               # Project manifest with npm scripts
├── server.js                  # Lightweight local HTTP preview server
├── specification.md           # Portfolio design & content specification
├── styles/
│   ├── main.css               # Design tokens, variables, typography, and base elements
│   ├── components.css         # Section layouts, hero, cards, modals, and toasts
│   └── responsive.css         # Responsive styling for mobile, tablet, and desktop
├── js/
│   ├── data.js                # Centralized content data store
│   └── main.js                # Theme toggle, navigation spy, modals, and form logic
└── assets/
    ├── images/
    │   ├── professional_photo.jpg   # High-resolution professional portrait
    │   └── favicon.svg              # Custom 'R' monogram SVG favicon
    ├── docs/
    │   └── rakshitha_resume.docx    # Downloadable official resume
    └── certificates/                # Official certificates & participation documents
        ├── nxtwave_databases.png
        ├── mite_ml_workshop.png
        ├── mite_ml_workshop.pdf
        ├── nptel_data_mining.pdf
        ├── nxtwave_static_website.pdf
        ├── nxtwave_responsive_website.pdf
        └── gcem_hacks_participation.pdf
```

---

## 🚀 How to Run Locally

### Option 1: Using Node.js (Recommended)
You can start the lightweight static dev server:
```bash
npm start
```
or:
```bash
node server.js
```
Then open your browser and navigate to:
```
http://localhost:3000
```

### Option 2: Direct File Open
Because the project uses standard web technologies with relative paths, you can also double-click [index.html](file:///c:/Users/raksh/OneDrive/Desktop/my_portfolio/index.html) to open it directly in any browser.

---

## 🌐 Deployment to GitHub Pages
To publish this portfolio to the web for free on GitHub Pages:
1. Push this repository to GitHub under your account (`Rakshitha8-sys/portfolio`).
2. In your GitHub repository, navigate to **Settings** > **Pages**.
3. Under **Build and deployment**, select **Source** as `Deploy from a branch` and choose the `main` branch with `/ (root)`.
4. Your live website will be accessible at: `https://rakshitha8-sys.github.io/portfolio/`.

---

## 📝 Missing Assets / Future Information
As noted in `specification.md`:
- **Project Repositories**: When source code repositories for the 3 projects (*Cosmetic Ingredient Conflict Detection*, *KindKart*, *ECG Storage*) are published to GitHub, update the respective repository URLs in [js/data.js](file:///c:/Users/raksh/OneDrive/Desktop/my_portfolio/js/data.js).
- **Intelligent Email Assistant**: If you wish to feature your 4th AI project in the future, it can be easily enabled in [js/data.js](file:///c:/Users/raksh/OneDrive/Desktop/my_portfolio/js/data.js).

# 🚀 Personal Portfolio

A modern and responsive developer portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS (ShadCN UI)**, and **Framer Motion**. This portfolio showcases my projects, skills, and experience as a Full Stack Developer with expertise in MERN stack, mobile development, and enterprise systems.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Featured Projects](#-featured-projects)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Contact](#-connect-with-me)

---

## ✨ Features

- 🎨 **Modern & Responsive Design** - Mobile-first approach with beautiful UI
- ⚡ **Performance Optimized** - Static export with image optimization
- 🎬 **Smooth Animations** - Framer Motion for engaging interactions
- 🌙 **Dark/Light Mode** - Theme toggle support
- 📱 **Mobile Friendly** - Works seamlessly on all devices
- ♿ **Accessibility** - WCAG compliant components
- 🔍 **SEO Optimized** - Proper meta tags and semantic HTML

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, [ShadCN UI](https://ui.shadcn.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Package Manager**: Yarn / npm
- **Deployment**: [Netlify](https://www.netlify.com/) / Static Export
- **Version Control**: Git

---

## 📸 Preview

| Home Page | Projects Section |
|----------|------------------|
| ![Capture1](https://github.com/user-attachments/assets/d5ec4f04-21df-4611-b292-c6475cd19ef2) | ![Capture](https://github.com/user-attachments/assets/6f2d0ecd-a987-4b2c-801e-47921334321a) |

---

## 🚀 Featured Projects

### Enterprise & Large Scale
- **Enterprise Management Information System (MIS)** - 16+ module management platform with duplicate detection and role-based access
- **SMARTMUSA** - AI-driven banana cultivation system with ML models and IoT integration
- **EduPulse** - Microservices-based e-learning platform with Stripe payment integration

### E-Commerce
- **Mr. King Cafe** - Full-stack cafe ordering system with Stripe integration and admin dashboard
- **StateLk** - Real estate marketplace for buying/selling properties in Sri Lanka
- **E-Mate** - Mobile e-commerce app with real-time order tracking

### Communication & Chat
- **Real Talk** - Real-time chat application with Socket.IO
- **SriChat** - ChatGPT clone powered by OpenAI API

### Mobile Applications
- **KeepIt** - P2P book marketplace mobile app
- **BuildHub** - Procurement management system for construction industry
- **Codewave** - Interactive programming assistant for students

[View all projects →](https://yourdomain.com/projects)

---

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- Yarn or npm

### Setup Steps

```bash
# Clone the repository
git clone https://github.com/tharushinimesha99/portfolio.git

# Navigate into the project
cd portfolio-v2

# Install dependencies
yarn install
# or
npm install
```

---

## 📤 Build for Production

```bash
yarn build
```

If you’re using `output: 'export'` in `next.config.js`, make sure to disable image optimization:

```ts
// next.config.js
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
};

export default nextConfig;
```

---

## 📁 Folder Structure

```bash
src/
├── app/                # Next.js app router
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── favicon.ico     # Favicon
├── components/         # Reusable components
│   ├── sections/       # Page sections
│   ├── ui/            # UI components (ShadCN)
│   ├── navbar.tsx     # Navigation bar
│   ├── footer.tsx     # Footer component
│   └── theme-provider.tsx
├── data/
│   └── projects.ts    # Project listings
├── styles/            # Global styles
│   ├── global.css
│   └── tailwind.css
└── utils/             # Utility functions
    └── tailwind-utils.ts

public/
├── projects/          # Project images
├── icons/            # Icon assets
├── robots.txt        # SEO robots file
└── sitemap.xml       # SEO sitemap
```

---

## � Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Connect repository to Netlify
3. Configure build command: `npm run build`
4. Configure publish directory: `out/`
5. Deploy!

### Environment Variables
No environment variables required for static export.

---

## 👨‍💻 About

- **Name**: Tharushi Nimesha
- **Title**: Full Stack Developer
- **Expertise**: MERN Stack, Mobile Development, Enterprise Systems
- **Location**: Sri Lanka

---

## 🌐 Connect with Me

- [GitHub](https://github.com/tharushinimesha99)
- [LinkedIn](https://www.linkedin.com/in/tharushi-nimesha/)
- [Facebook](https://www.facebook.com/tharushi.nimesha.980315)

---

## � License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [ShadCN UI](https://ui.shadcn.dev/) - Component library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Netlify](https://www.netlify.com/) - Hosting platform

---

**Last Updated**: January 31, 2026

# Ashutosh Lodha — Portfolio

A high-performance personal portfolio website with a DevOps control-plane aesthetic. Built with modern web technologies for optimal performance and user experience.

![Portfolio Preview](https://via.placeholder.com/800x400?text=Portfolio+Preview) <!-- Replace with actual screenshot -->

## ✨ Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark/Light Mode**: Automatic theme switching based on system preferences
- **3D Animations**: Interactive Three.js scenes with WebGL fallback
- **Smooth Animations**: Powered by Framer Motion
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **TypeScript**: Full type safety and better developer experience
- **Modern CSS**: Tailwind CSS v4 with custom design tokens
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber (@react-three/fiber & @react-three/drei)
- **Icons**: Lucide React & React Icons
- **Deployment**: Vercel/Netlify ready

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 20.0.0 or higher
- **npm**: Version 10.0.0 or higher (comes with Node.js)
- **Git**: For version control

You can check your versions with:
```bash
node --version
npm --version
git --version
```

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/portfolio-website.git
cd portfolio-website
```

Replace `your-username` with your actual GitHub username.

### 2. Install Dependencies

Install all required dependencies using npm:

```bash
npm install
```

This will install all packages listed in `package.json`, including:
- React and React DOM
- Vite and plugins
- Tailwind CSS v4
- Three.js and React Three Fiber
- Framer Motion
- TypeScript and type definitions

### 3. Start Development Server

Run the development server:

```bash
npm run dev
```

The server will start and provide output similar to:
```
VITE v6.4.2  ready in 1387 ms

➜  Local:   http://localhost:5173/
➜  Network: http://192.168.1.2:5173/
➜  press h + enter to show help
```

### 4. Open in Browser

Open your browser and navigate to `http://localhost:5173/` to view your portfolio.

The development server includes:
- Hot module replacement (HMR) for instant updates
- Automatic browser refresh on file changes
- Error overlay for debugging

## 📁 Project Structure

```
portfolio-website/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── layout/         # Layout components (Navbar, Footer)
│   │   ├── sections/       # Main sections (Hero, About, Skills, etc.)
│   │   └── three/          # 3D components (HeroScene, HeroSceneSafe)
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # App entry point
│   └── index.css           # Global styles and Tailwind imports
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── README.md               # This file
```

## 🏗️ Build for Production

To build the project for production:

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to a GitHub repository
2. Connect your repo to [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite and deploy automatically
4. Your site will be live at `your-project.vercel.app`

### Netlify

1. Push your code to a GitHub repository
2. Connect your repo to [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

### Other Platforms

The built files in `dist/` can be deployed to any static hosting service like:
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront
- DigitalOcean Spaces

## 🎨 Customization

### Personal Information

Edit the following files to customize with your information:

- `src/components/sections/Hero.tsx` - Hero section content
- `src/components/sections/About.tsx` - About section
- `src/components/sections/Skills.tsx` - Skills and technologies
- `src/components/sections/Experience.tsx` - Work experience
- `src/components/sections/Projects.tsx` - Project showcase
- `src/components/layout/Navbar.tsx` - Navigation links
- `src/components/layout/Footer.tsx` - Footer content

### Styling

- `src/index.css` - Global styles and CSS custom properties
- `tailwind.config.js` - Tailwind theme customization

### 3D Scenes

- `src/components/three/HeroScene.tsx` - Main 3D scene
- `src/components/three/HeroSceneSafe.tsx` - WebGL fallback

## 🐛 Troubleshooting

### Common Issues

**Port 5173 already in use:**
```bash
# Kill process on port 5173
npx kill-port 5173
# Or use a different port
npm run dev -- --port 5174
```

**Node version issues:**
Ensure you're using Node.js 20+. Use nvm to manage versions:
```bash
nvm install 20
nvm use 20
```

**Dependencies not installing:**
```bash
# Clear npm cache
npm cache clean --force
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json
# Reinstall
npm install
```

**Build fails:**
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run build
```

## 📄 Scripts

Available npm scripts:

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint (if configured)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) - 3D in React

---

Built with ❤️ by Ashutosh Lodha

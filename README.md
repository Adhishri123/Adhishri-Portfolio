# Adhishri Deshmukh - Portfolio (React JS + Vite + Tailwind CSS + Framer Motion)

## Run
```
npm install
npm run dev        # open http://localhost:5173
npm run build      # production build in /dist
```

## Edit your content
Only one file: `src/data/index.js` (name, contact, skills, projects, education).

## Folder map
- `index.html`            - page shell, title
- `src/main.jsx`          - starts React
- `src/App.jsx`           - puts all sections in order
- `src/index.css`         - Tailwind + custom glow/gradient classes
- `src/utils/motion.js`   - Framer Motion slide animations
- `src/data/index.js`     - all your text and lists
- `src/components/*`      - Navbar, Hero, Skills, Encryption, Projects, Education, Footer
- `public/`               - videos and images (served from `/`)

## Deploy (free)
Push to GitHub, then import the repo in Vercel or Netlify. Build command: `npm run build`, output folder: `dist`.

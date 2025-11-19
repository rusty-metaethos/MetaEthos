# MetaEthos Website

Modern, responsive website for MetaEthos - Technology solutions with purpose.

## 🚀 Features

- **Modern Design**: Beautiful UI with purple gradient theme and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Components**:
  - Orbiting tech stack visualization
  - Animated statistics counters
  - Hover effects on footer
  - Portfolio showcase with dynamic grid layout
- **Contact Form**: Integrated with Web3Forms for email notifications
- **Performance**: Built with React + Vite for optimal performance

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Form Handling**: Web3Forms API

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔧 Configuration

### Contact Form
The contact form is configured with Web3Forms. To update the email recipient:
1. Get your access key from [web3forms.com](https://web3forms.com)
2. Update the access key in `src/components/Contact.tsx`

### Customization
- **Colors**: Edit `tailwind.config.js` to customize the color scheme
- **Content**: Update component files in `src/components/`
- **Images**: Replace images in the `public/` folder

## 📁 Project Structure

```
website/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # Reusable UI components
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Services.tsx
│   │   ├── Stats.tsx
│   │   ├── TechStack.tsx
│   │   └── ...
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Key Sections

1. **Hero**: Eye-catching landing section with animated text
2. **Portfolio**: Showcase of projects with dynamic grid layout
3. **Services**: Overview of services offered
4. **Tech Stack**: Interactive orbiting visualization of technologies
5. **Stats**: Animated statistics counters
6. **Contact**: Contact form with Web3Forms integration
7. **Footer**: Modern footer with hover effects

## 🌐 Deployment

The site can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages

## 📝 License

All rights reserved © 2025 MetaEthos

## 📧 Contact

For inquiries: rusty@metaethos.net

---

Built with ❤️ by MetaEthos

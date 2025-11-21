
# NOA - The Prompt Engineering Ecosystem


## 🚀 Quick Start

### Prerequisites
- Node.js 18.0.0 or higher
- npm or yarn package manager

### Run Locally

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd noa---the-prompt-engineering-ecosystem
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables (optional):**
   ```bash
   cp .env.example .env
   ```
   The project works without any environment variables, but you can customize settings if needed.

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:3000`


## 🛠️ Build Commands

- **Development:** `npm run dev` - Start development server
- **Build:** `npm run build` - Build for production
- **Preview:** `npm run preview` - Preview production build locally
- **Type Check:** `npm run type-check` - Run TypeScript type checking

## 📁 Project Structure

```
├── components/          # React components
│   ├── CaseStudies.tsx
│   ├── Contact.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Process.tsx
│   ├── SectionHeader.tsx
│   ├── Services.tsx
│   └── Team.tsx
├── App.tsx             # Main App component
├── index.tsx           # Entry point
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── vercel.json         # Vercel deployment configuration
└── package.json        # Dependencies and scripts
```

## 🔧 Configuration

The project is configured with:
- **Vite** for fast development and optimized builds
- **TypeScript** for type safety
- **Tailwind CSS** for styling (via CDN)
- **Lucide React** for icons
- **React 19** with latest features

## 🌍 Environment Variables

This project currently doesn't require any environment variables. It's a static React application that works out of the box.

| Variable | Description | Required |
|----------|-------------|----------|
| None | Static website - no environment variables needed | No |

## 📦 Dependencies

### Production Dependencies
- `react` - React framework
- `react-dom` - React DOM bindings
- `lucide-react` - Icon library

### Development Dependencies
- `vite` - Build tool and dev server
- `@vitejs/plugin-react` - Vite React plugin
- `typescript` - TypeScript compiler
- `@types/node` - Node.js type definitions

## 🚨 Troubleshooting

### Common Issues

1. **Build fails with TypeScript errors:**
   ```bash
   npm run type-check
   ```

2. **Environment variables not working:**
   - Ensure your `.env` file is in the root directory
   - Restart the development server after adding new variables
   - In Vercel, make sure environment variables are set in the dashboard

3. **Import errors:**
   - Check that all dependencies are installed: `npm install`
   - Verify import paths are correct

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

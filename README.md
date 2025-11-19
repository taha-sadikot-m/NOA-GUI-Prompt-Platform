<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# NOA - The Prompt Engineering Ecosystem

A modern, responsive web application built with React, TypeScript, and Vite, designed for prompt engineering services and AI solutions.

View your app in AI Studio: https://ai.studio/apps/drive/1VtYI2RiKOqPJVpn1ipLiY2DA9m6EehDe

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

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` and set your `GEMINI_API_KEY` to your actual Gemini API key.

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:3000`

## 🌐 Deploy to Vercel

### Option 1: Deploy from Git Repository

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository
   - Vercel will automatically detect it's a Vite project

3. **Configure Environment Variables:**
   - In your Vercel project dashboard, go to Settings → Environment Variables
   - Add `GEMINI_API_KEY` with your actual API key value
   - Set it for Production, Preview, and Development environments

4. **Deploy:**
   - Click "Deploy"
   - Your app will be live in minutes!

### Option 2: Deploy using Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Set Environment Variables:**
   ```bash
   vercel env add GEMINI_API_KEY
   ```
   Enter your API key when prompted.

5. **Deploy to Production:**
   ```bash
   vercel --prod
   ```

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

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Your Gemini AI API key | Yes |

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

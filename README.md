# Professional Portfolio Website

A modern, responsive portfolio website built with React.js and Material-UI (MUI) showcasing your professional experience, projects, and skills.

## 🚀 Features

- **Modern Design**: Dark theme with gradient backgrounds and glassmorphism effects
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Material-UI Components**: Professional UI components with consistent design
- **Professional Sections**: Hero, About, Experience, Projects, Skills, and Contact
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic content
- **SEO Optimized**: Meta tags and semantic HTML structure

## 📋 Sections Included

1. **Hero Section**: Animated introduction with call-to-action buttons
2. **About Section**: Personal information and key features
3. **Experience Section**: Timeline of work experience with achievements
4. **Projects Section**: Showcase of projects with technologies used
5. **Skills Section**: Technical skills with progress bars and learning progress
6. **Contact Section**: Contact form and social media links
7. **Footer**: Copyright and navigation links

## 🛠️ Technologies Used

- **React.js**: Frontend framework
- **Material-UI (MUI)**: UI component library
- **MUI Icons**: Professional icon set
- **CSS3**: Custom styling with MUI's sx prop
- **HTML5**: Semantic markup

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## 🎨 Customization Guide

### Personal Information

Update the following files with your personal information:

#### 1. Hero Section (`src/components/Hero.js`)
- Change "Your Name" to your actual name
- Update the description text
- Replace social media links with your actual profiles

#### 2. About Section (`src/components/About.js`)
- Update the personal description
- Modify the features to match your strengths

#### 3. Experience Section (`src/components/Experience.js`)
- Update the experiences array with your work history
- Add your actual achievements and responsibilities

#### 4. Projects Section (`src/components/Projects.js`)
- Replace the projects array with your actual projects
- Update project descriptions, technologies, and features

#### 5. Skills Section (`src/components/Skills.js`)
- Update skill levels and add/remove skills as needed
- Modify the "Currently Learning" section

#### 6. Contact Section (`src/components/Contact.js`)
- Update email, phone, and location information
- Replace social media links with your actual profiles

### Styling Customization

#### Theme Customization
The portfolio uses MUI's theming system. To customize the theme:

1. **Primary Colors**: Update the theme in `src/App.js`
   ```jsx
   const darkTheme = createTheme({
     palette: {
       primary: {
         main: '#667eea', // Your primary color
       },
       secondary: {
         main: '#764ba2', // Your secondary color
       },
     },
   });
   ```

2. **Custom Components**: Modify component styles using the `sx` prop
3. **Global Styles**: Update `src/index.css` for global styles

#### Typography
- Font: Roboto (MUI default)
- Can be changed in the theme configuration

### Adding New Sections

1. Create a new component in `src/components/`
2. Use MUI components (Box, Typography, Grid, Card, etc.)
3. Import and add to `src/App.js`
4. Update navigation in `src/components/Header.js`

## 📱 Responsive Design

The portfolio is fully responsive with MUI's built-in breakpoints:
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Configure custom domain if needed

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically build and deploy

## 🔧 Configuration

### Environment Variables
Create a `.env` file for any API keys or configuration:
```env
REACT_APP_EMAIL_SERVICE=your-email-service
REACT_APP_EMAIL_TEMPLATE=your-template-id
```

### Contact Form
The contact form is currently set up to log to console. To make it functional:

1. **EmailJS**: Integrate with EmailJS for email functionality
2. **Netlify Forms**: Use Netlify's form handling
3. **Custom Backend**: Connect to your own backend API

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Note**: Remember to replace all placeholder content (Your Name, your.email@example.com, etc.) with your actual information before deploying. 
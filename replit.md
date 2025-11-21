# Kalyani Tradex

## Overview

Kalyani Tradex is a professional export business website for an Indian merchant exporter based in Pune, Maharashtra, India. The website serves as a digital storefront for international buyers, showcasing the company's extensive product range, certifications, and contact information. The project is built as a modern single-page application using React and Vite, focusing on professional presentation suitable for B2B export business.

**Business Identity:**
- Company: Kalyani Tradex
- Tagline: "From Local Roots to Global Reach"
- Business Type: Merchant Exporter (Natural Food Products)
- Location: Kedgaon Chaufula, Pune, Maharashtra – 412203, India
- GSTIN: 27PFPPS0893C1ZO
- IEC Code: PFPPS0893C
- FSSAI License: 11525996000685
- RCMC (APEDA): RCMEAPPLYAPEDA00057310AM26
- Udyam/MSME: MH-26-0892043
- AD CODE: 6360380

**Recent Changes (November 21, 2024):**
- Built complete export business website from scratch
- Implemented all 6 product categories with detailed listings
- Added comprehensive About section with certifications
- Created functional contact form with proper URL encoding
- Configured for Replit hosting environment

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework Choice: React 19 with Vite**
- **Problem**: Need for a fast, modern development environment with hot module replacement
- **Solution**: React 19.2.0 paired with Vite 7.2.4 as the build tool
- **Rationale**: Vite provides near-instant server start and lightning-fast HMR, significantly improving developer experience compared to traditional bundlers like Webpack
- **Pros**: Fast build times, optimized production builds, modern ESM-based architecture
- **Cons**: Relatively newer ecosystem compared to Create React App

**Build Tool Configuration:**
- Uses `@vitejs/plugin-react` for Fast Refresh and JSX transformation
- Development server configured to run on `0.0.0.0:5000` with strict port enforcement
- This configuration enables network access for testing across devices

**Component Architecture:**
- Single-page application (SPA) structure
- Single main component in `App.jsx` containing all sections
- Functional React component with useState hooks for form management
- CSS styling split between `App.css` (component styles) and `index.css` (global resets)

**Website Sections:**
1. **Navigation** - Sticky header with company branding and menu links
2. **Hero Section** - Eye-catching gradient banner with company tagline and certification badges
3. **Quick Info** - Four key value propositions (Global Export, Quality Assured, Export Ready, Trusted Partner)
4. **Products** - Six product categories with detailed item listings:
   - Jaggery Products (11 items)
   - Sugar Products (6 items)
   - Himalayan Salt (3 varieties)
   - Premium Spices (14 items)
   - Coffee Products (1 item)
   - Dairy Products (1 item)
5. **About** - Company mission, certifications grid, and success stories
6. **Contact** - Contact information, WhatsApp integration, and inquiry form
7. **Footer** - Company info and quick links

### Styling Approach

**CSS Strategy: Custom CSS with Modern Features**
- **Problem**: Need for professional, maintainable styling without framework overhead
- **Solution**: Custom CSS with CSS variables and modern layout techniques
- **Key Design Decisions**:
  - Gradient-based navigation bar (`linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)`)
  - Sticky navigation with z-index layering
  - Responsive container with max-width constraints (1200px)
  - Box-shadow effects for visual depth
- **Pros**: Full control over styles, no additional dependencies, smaller bundle size
- **Cons**: Requires manual responsive design implementation

### Code Quality and Linting

**ESLint Configuration:**
- **Problem**: Maintain code quality and catch common React pitfalls
- **Solution**: Comprehensive ESLint setup with React-specific plugins
- **Configuration**:
  - Base JavaScript recommended rules
  - React Hooks rules for proper hook usage
  - React Refresh rules for Vite compatibility
  - Custom rule: Allows unused variables with capital letters or underscores (pattern matching for constants)
- **Target**: ECMAScript 2020 with browser globals
- **Ignores**: Build output directory (`dist`)

### Project Structure

**Directory Organization:**
- `/src` - Application source code
  - `main.jsx` - Application entry point
  - `App.css` - Main application styles
  - `index.css` - Global styles and CSS resets
- `/public` - Static assets (Vite default)
- `/attached_assets` - Business documentation and reference materials
- Root configuration files for tooling (Vite, ESLint, package management)

## External Dependencies

### Core Framework Dependencies

**React Ecosystem:**
- `react@^19.2.0` - Core React library
- `react-dom@^19.2.0` - React DOM rendering

**Build and Development Tools:**
- `vite@^7.2.4` - Build tool and development server
- `@vitejs/plugin-react@^5.1.1` - React integration for Vite

### Development Dependencies

**Linting and Type Checking:**
- `eslint@^9.39.1` - JavaScript linting
- `@eslint/js@^9.39.1` - ESLint JavaScript configurations
- `eslint-plugin-react-hooks@^7.0.1` - React Hooks linting rules
- `eslint-plugin-react-refresh@^0.4.24` - Vite Fast Refresh linting
- `globals@^16.5.0` - Global variable definitions for linting

**Type Definitions (Development):**
- `@types/react@^19.2.5` - TypeScript definitions for React
- `@types/react-dom@^19.2.3` - TypeScript definitions for React DOM

Note: While TypeScript type definitions are included, the project uses JavaScript (.jsx files) rather than TypeScript, suggesting these are included for editor intelligence and potential future migration.

### External Services

**Current State:**
- No backend services integrated
- No database connections
- No third-party API integrations
- No authentication system

**Contact Form:**
- Client-side form handling with React useState
- Email submission via mailto protocol (properly URL-encoded)
- Fields: Name, Email, Country, Product Interest, Message
- Sends inquiries to: kalyanitradex@gmail.com

**Business Contact Information:**
- Phone numbers: +91 98904 46644, +91 75584 44255
- Email: kalyanitradex@gmail.com
- WhatsApp integration: Direct links to both phone numbers
- Office address displayed with proper formatting

### Hosting and Deployment

**Replit Development Environment:**
- Server configured to bind to `0.0.0.0` (all network interfaces)
- Fixed port 5000 with strict port mode
- This setup is optimized for containerized or cloud-based deployment environments

**GitHub Pages Deployment:**
- Configured for deployment to: https://kalyanigroup.github.io/kalyanitradex/
- Base path set to `/kalyanitradex/` in vite.config.js
- Deployment package: gh-pages@^6.3.0
- Deployment command: `npm run deploy`
- Repository: https://github.com/KalyaniGroup/kalyanitradex
- Deployment instructions: See DEPLOY_TO_GITHUB_PAGES.md
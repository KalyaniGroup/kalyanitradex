# Deploy Kalyani Tradex to GitHub Pages

This guide will help you publish your website to GitHub Pages.

## Your Website URL
Once deployed, your website will be available at:
**https://kalyanigroup.github.io/kalyanitradex/**

---

## Step-by-Step Deployment Instructions

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the **+** button in the top right corner
3. Click **New repository**
4. Fill in the details:
   - **Repository name:** `kalyanitradex` (exactly as shown)
   - **Description:** Kalyani Tradex - Export Business Website
   - **Visibility:** Public (required for free GitHub Pages)
5. **DO NOT** check "Initialize with README"
6. Click **Create repository**

### Step 2: Connect Replit to GitHub

You have two options:

#### Option A: Using Replit's GitHub Integration (Recommended)

1. In your Replit project, click on the **Version Control** icon (left sidebar)
2. Click **Connect to GitHub**
3. Authorize Replit to access your GitHub account
4. Select the `kalyanitradex` repository you just created
5. This will automatically sync your code to GitHub

#### Option B: Using Command Line

If you prefer, you can use these commands in the Replit Shell:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your files
git commit -m "Initial commit - Kalyani Tradex website"

# Add your GitHub repository as remote
git remote add origin https://github.com/KalyaniGroup/kalyanitradex.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Deploy to GitHub Pages

Once your code is on GitHub, run this command in the Replit Shell:

```bash
npm run deploy
```

This command will:
1. Build your website (create optimized production files)
2. Create a `gh-pages` branch on GitHub
3. Upload your built website to that branch

### Step 4: Configure GitHub Pages

1. Go to your repository on GitHub: `https://github.com/KalyaniGroup/kalyanitradex`
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

### Step 5: Wait and Visit Your Website

GitHub will take 1-2 minutes to publish your site. You'll see a green checkmark when it's ready.

Visit your live website at:
**https://kalyanigroup.github.io/kalyanitradex/**

---

## Making Updates

Whenever you make changes to your website:

1. Save your changes in Replit
2. Run in the Shell:
   ```bash
   npm run deploy
   ```
3. Wait 1-2 minutes for GitHub Pages to update
4. Refresh your website to see the changes

---

## Troubleshooting

### Problem: "Permission denied" error
**Solution:** Make sure you're logged into GitHub and have write access to the repository.

### Problem: Website shows 404 error
**Solution:** 
1. Check that GitHub Pages is enabled in repository Settings > Pages
2. Make sure the branch is set to `gh-pages`
3. Wait a few more minutes - initial deployment can take up to 10 minutes

### Problem: Website looks broken or has missing styles
**Solution:** 
- Make sure you ran `npm run deploy` (not just `git push`)
- The `base` path in `vite.config.js` must match your repository name exactly

### Problem: Need to update the website
**Solution:**
1. Make your changes in Replit
2. Run `npm run deploy` again
3. Wait 1-2 minutes for updates to appear

---

## Custom Domain (Optional)

If you want to use your own domain (e.g., www.kalyanitradex.com):

1. Buy a domain from a domain registrar (GoDaddy, Namecheap, etc.)
2. In your repository Settings > Pages, add your custom domain
3. Follow GitHub's instructions to configure DNS records
4. Update `vite.config.js` to change `base: '/kalyanitradex/'` to `base: '/'`
5. Run `npm run deploy` again

---

## Quick Reference Commands

```bash
# Deploy to GitHub Pages
npm run deploy

# Build locally to test
npm run build

# Preview the production build locally
npm run preview

# Run development server
npm run dev
```

---

## Support

If you run into any issues, you can:
1. Check GitHub's official documentation: https://docs.github.com/en/pages
2. Ask me for help here in Replit!

---

**Your website is configured and ready to deploy!**
Just follow the steps above to publish it to GitHub Pages.

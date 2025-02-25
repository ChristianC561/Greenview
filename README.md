# Greenview - Resume Website

This is a personal resume website built with React, Vite, and deployed on GitHub Pages.

## GitHub Pages Deployment

This project is configured to be deployed on GitHub Pages using GitHub Actions. The deployment process is automated through the workflow defined in `.github/workflows/deploy.yml`.

### How it works

1. When you push changes to the `main` branch, GitHub Actions will automatically:
   - Install dependencies
   - Build the project
   - Deploy the built files to the `gh-pages` branch

2. GitHub Pages is configured to serve the content from the `gh-pages` branch.

### Accessing the deployed site

Once deployed, the site will be available at: `https://[your-github-username].github.io/Greenview/`

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

To customize this website for your own resume:

1. Edit the content in `src/App.tsx` and other components
2. Update styles in CSS files
3. Add your own assets in the `public` directory

## Configuration

- The base URL for GitHub Pages is configured in `vite.config.ts`
- If you rename your repository, update the `base` property in `vite.config.ts` to match your new repository name

## Technologies Used

- React
- Vite
- TypeScript
- GitHub Actions
- GitHub Pages

## Project info

**URL**: https://lovable.dev/projects/d8136ee2-4562-426d-9e9a-3dd0dfca5153

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/d8136ee2-4562-426d-9e9a-3dd0dfca5153) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/d8136ee2-4562-426d-9e9a-3dd0dfca5153) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)

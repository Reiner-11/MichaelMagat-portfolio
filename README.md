# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1o-N_litOihHCtP8HoBwBXH7pb_dedaIt

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `BUILD_API_KEY` in [.env.local](.env.local) to your API key (note: client-side keys are public)
3. Run the app:
   `npm run dev`
# MichaelMagat-portfolio

## Environment & assets notes

- If you deploy the site to a subpath (for example GitHub Pages at /<your-repo>/), Vite's `base` must match that subpath so built asset URLs resolve correctly. This project reads `VITE_BASE_URL` from an environment file when available; otherwise it falls back to `/MichaelMagat-portfolio/`.

- To provide API keys to the client (not recommended for secrets), set `VITE_BUILD_API_KEY` in a `.env` file at the project root. The build exposes it as `import.meta.env.VITE_BUILD_API_KEY` and also maps `process.env.API_KEY` and `process.env.BUILD_API_KEY` for compatibility with older code.

- Recommended ways to reference images so they work in both dev and production:
   - Import them: `import logo from './assets/logo.png';` then `<img src={logo} />`.
   - Use `new URL('./assets/bg.png', import.meta.url).href` for runtime background images.
   - Put static files in `public/` and reference them using `import.meta.env.BASE_URL + 'images/foo.png'`.
"# MichaelMagat-portfolio" 
"# MichaelMagat-portfolio" 
"# Personal-Portfolio" 
# MichaelMagat-portfolio

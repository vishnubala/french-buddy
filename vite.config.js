import { defineConfig } from 'vite';

// base './' makes the built site work from any subpath —
// GitHub Pages (user.github.io/repo/), Netlify, or a plain folder.
export default defineConfig({ base: './' });

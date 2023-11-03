import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  historyApiFallback: true,
  base:'https://stackblogs.netlify.app/' ///// hosted on https://654437f290262812811f2f40--prismatic-moonbeam-5b83dd.netlify.app/
})


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const rawBasePath = process.env.VITE_BASE_PATH?.trim()
const base = !rawBasePath || rawBasePath === '/'
  ? '/'
  : `/${rawBasePath.replace(/^\/+|\/+$/g, '')}/`

export default defineConfig({
  plugins: [react()],
  base,
})

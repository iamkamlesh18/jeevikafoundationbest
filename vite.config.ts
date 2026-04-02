import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const defaultBasePath = '/jeevikafoundationbest/'
const rawBasePath = process.env.VITE_BASE_PATH?.trim() ?? defaultBasePath
const base = rawBasePath === '/'
  ? '/'
  : `/${rawBasePath.replace(/^\/+|\/+$/g, '')}/`

export default defineConfig({
  plugins: [react()],
  base,
})

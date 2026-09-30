import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

const FRAMES_DIR = path.join(process.cwd(), 'frames-v2')

export default defineConfig({
  plugins: [
    react(),
    {
      // Custom plugin to serve the immutable frames directory at /frames/
      // without moving or copying the original files
      name: 'serve-frames',
      configureServer(server) {
        const handleFrameRequest = (req: any, res: any, next: () => void) => {
          const url: string = req.url || '/'
          const rawFilename = url.startsWith('/') ? url.slice(1) : url
          const filename = rawFilename.split('?')[0]

          // Strict whitelist: only serve the known frame pattern
          if (!/^ezgif-frame-\d{3}\.jpg$/.test(filename)) {
            return next()
          }

          const filePath = path.join(FRAMES_DIR, filename)

          if (!fs.existsSync(filePath)) {
            res.statusCode = 404
            res.end('Frame not found')
            return
          }

          const stat = fs.statSync(filePath)
          res.setHeader('Content-Type', 'image/jpeg')
          res.setHeader('Content-Length', stat.size.toString())
          // Force browser to fetch fresh frames - no disk cache
          res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
          res.setHeader('Pragma', 'no-cache')
          res.setHeader('Expires', '0')

          const stream = fs.createReadStream(filePath)
          stream.on('error', () => next())
          stream.pipe(res)
        }

        server.middlewares.use('/frames-v2', handleFrameRequest)
        server.middlewares.use('/frames', handleFrameRequest)
      },
      closeBundle() {
        const distFrames = path.join(process.cwd(), 'dist', 'frames-v2')
        if (fs.existsSync(FRAMES_DIR)) {
          if (!fs.existsSync(distFrames)) {
            fs.mkdirSync(distFrames, { recursive: true })
          }
          fs.cpSync(FRAMES_DIR, distFrames, { recursive: true })
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './src'),
    },
  },
})

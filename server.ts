import app from './src/app.js'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})

process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server shut down')
  })
})

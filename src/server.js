import dotenv from 'dotenv'
import app from './app'

dotenv.config()

const port = process.env.APP_PORT || 3000

app.listen(port, ()=> console.log('Sever started 🔥'))

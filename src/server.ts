import express from 'express'
import { serverConfig } from './config'
import pingRouter from './routers/ping.router'
const app = express()

/*** Registering all router and their corresponding routes with our app object */
app.use(pingRouter)

app.listen(serverConfig.PORT, () => {
  console.log(`server running at ${serverConfig.PORT} `)
  console.log('press ctrl +C TO Stop the server')
})

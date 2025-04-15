import express from 'express'
import { serverConfig } from './config'
import v1Router from './routers/v1/index.router'
import v2Router from './routers/v2/index.router'
const app = express()

/*** Registering all router and their corresponding routes with our app object */
app.use('/api/v1', v1Router)
app.use('/api/v2', v2Router)

app.listen(serverConfig.PORT, () => {
  console.log(`server running at ${serverConfig.PORT} `)
  console.log('press ctrl +C TO Stop the server')
})

//this file contains all the basic configuration logic for the app server work
import dotenv from 'dotenv'
//type keyword is helps to do user define type

type Serverconfig = {
  PORT: number
}
function loadenv() {
  dotenv.config()
}
loadenv()
export const serverConfig: Serverconfig = {
  PORT: Number(process.env.PORT) || 3001,
}

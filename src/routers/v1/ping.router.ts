import express from 'express'
import { pingHandler } from '../../controllers/ping.controller'
import { validateRequestBody } from '../../validators'
import { pingSchema } from '../../validators/ping.validators'

const pingRouter = express.Router()

pingRouter.get('/', validateRequestBody(pingSchema), pingHandler)

export default pingRouter

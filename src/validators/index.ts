import { Request, Response, NextFunction } from 'express'
import { AnyZodObject } from 'zod'

export const validateRequestBody = (schema: AnyZodObject) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      await schema.parseAsync(req.body)
      console.log('Request body validated successfully')
      next()
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Validation error',
        error: error instanceof Error ? error.message : error,
      })
    }
  }
}

export const validateRequestParams = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.params)
      console.log('Request params validated successfully')
      next()
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        error: error,
      })
    }
  }
}

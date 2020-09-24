import express from 'express'
import expressAsyncHandler from 'express-async-handler'

function errorHandler(handler: express.RequestHandler) {
    const wrappedHandler: express.RequestHandler = (req, res, next) => {
        const newNext: express.NextFunction = (err?: any) => {
            if (err instanceof Error) {
                res.status(500).json({
                    code: 500,
                    msg: `${err.name}: ${err.message}`
                })
            }
            else {
                next(err)
            }
        }

        handler(req, res, newNext)
    }

    return wrappedHandler
}

export function asyncHandler(handler: express.RequestHandler) {
    return errorHandler(expressAsyncHandler(handler))
}

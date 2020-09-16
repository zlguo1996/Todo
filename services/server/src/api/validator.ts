import Ajv from 'ajv'
import {itemSchema} from 'common'
const ajv = new Ajv({
    schemaId: 'auto',
    allErrors: true,
})
ajv.addSchema(itemSchema, 'item')

export class ValidationError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'ValidationError'

        // Avoid bug in jest
        // https://github.com/facebook/jest/issues/8279#issuecomment-539775425
        Object.setPrototypeOf(this, ValidationError.prototype)
    }
}

export function validatorFactory(uri: string) {
    const validator = ajv.getSchema(uri)
    if (!validator) {
        throw new Error(`Invalid schema key / ref: ${uri}`)
    }
    return (data: any) => {
        const res = validator(data)
        if (res !== true) {
            throw new ValidationError(`validation failed on data: ${JSON.stringify(data)}`)
        }
    }
}


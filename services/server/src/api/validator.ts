import Ajv from 'ajv'
import {itemSchema} from 'common'
export const ajv = new Ajv({
    schemaId: 'auto',
    allErrors: true,
})
ajv.addSchema(itemSchema, 'item')

export function validatorFactory(uri: string) {
    const validator = ajv.getSchema(uri)
    if (!validator) {
        throw new Error(`Invalid schema key / ref: ${uri}`)
    }
    return validator
}


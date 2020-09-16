import {validatorFactory, ValidationError} from '../api/validator'

test('Validator (AddItem) works when encounter valid data', () => {
    const validate = validatorFactory('item#/definitions/AddItem')
    expect(() => validate({
        text: 'text',
    })).not.toThrow()
})

test('Validator (AddItem) works when encounter invalid data (additional property)', () => {
    const validate = validatorFactory('item#/definitions/AddItem')
    expect(() => validate({
        text: 'text',
        test: 'test'
    })).toThrow(ValidationError)
})


test('Validator (AddItem) works when encounter invalid data (false type)', () => {
    const validate = validatorFactory('item#/definitions/AddItem')
    expect(() => validate({
        text: 123
    })).toThrow(ValidationError)
})

test('toThrow works properly with custom error', () => {
    expect(() => {
        throw new ValidationError('helo')
    }).toThrow(ValidationError)
})

import {validatorFactory} from '../api/validator'

test('Validator (AddItem) works when encounter valid data', () => {
    const validate = validatorFactory('item#/definitions/AddItem')
    const res = validate({
        text: 'text',
    })

    expect(res).toBe(true)
})

test('Validator (AddItem) works when encounter invalid data (additional property)', () => {
    const validate = validatorFactory('item#/definitions/AddItem')
    const res = validate({
        text: 'text',
        test: 'test'
    })

    expect(res).toBe(false)
})


test('Validator (AddItem) works when encounter invalid data (false type)', () => {
    const validate = validatorFactory('item#/definitions/AddItem')
    const res = validate({
        text: 123
    })

    expect(res).toBe(false)
})

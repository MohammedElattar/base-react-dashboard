import * as Yup from 'yup'

export const replaceDefaultRules = (defaultRules, newRules) => {
    if (newRules) {
        Object.keys(newRules).forEach((key) => {
            if (!!newRules[key]) {
                delete defaultRules[key]
            } else {
                defaultRules[key] = newRules[key]
            }
        })
    }


    return Object.values(defaultRules)?.filter((item) => !!item)
}

export const emailRules = (newRules) => {
    const defaultRules = {
        required: 'required',
        email: 'email'
    }

    return replaceDefaultRules(defaultRules, newRules)
}

export const passwordRules = (newRules) => {
    const defaultRules = {
        required: 'required',
        min: 'min:8'
    }

    return replaceDefaultRules(defaultRules, newRules)
}

const generateSchema = (allRulesObject) => {
    let schema = Yup.object().shape({})

    // Iterate over the rulesObject

    Object.entries(allRulesObject).forEach(([fieldName, fieldRules]) => {
        if (fieldRules) {
            let fieldSchema = Yup.string()

            fieldRules.forEach(rule => {
                const [ruleName, ...params] = rule.split(':')

                fieldSchema = fieldSchema[ruleName](...params)
            })

            schema = schema.shape({[fieldName]: fieldSchema})
        }
    })

    return schema
}

export default generateSchema
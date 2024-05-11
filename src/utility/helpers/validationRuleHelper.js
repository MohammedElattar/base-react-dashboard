import * as Yup from 'yup'
import customSchema from "../validation/customSchema";

export const replaceDefaultRules = (defaultRules, newRules) => {
    if (newRules) {
        Object.keys(newRules).forEach((key) => {
            if (newRules[key]) {
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
        email: 'email',
        trim: 'trim'
    }

    return replaceDefaultRules(defaultRules, newRules)
}

export const stringRules = (newRules) => {
    const defaultRules = {
        required: 'required',
        max: 'max:255',
        trim: 'trim'
    }

    return replaceDefaultRules(defaultRules, newRules)
}

export const imageRules = (newRules) => {
    const defaultRules = {
        required: 'required',
        image: 'image'
    }

    return replaceDefaultRules(defaultRules, newRules)
}

export const passwordRules = (newRules) => {
    const defaultRules = {
        required: 'required',
        min: 'min:8',
        trim: 'trim'
    }

    return replaceDefaultRules(defaultRules, newRules)
}

const generateSchema = (allRulesObject) => {
    let schema = Yup.object().shape({});

    Object.entries(allRulesObject).forEach(([fieldName, fieldRules]) => {
        if (fieldRules) {
            let fieldSchema = Yup.string();

            fieldRules.forEach((rule) => {
                const [ruleName, ...params] = rule.split(':');

                if (customSchema[ruleName] !== undefined) {
                    fieldSchema = fieldSchema.test(
                        ruleName,
                        'error',
                        (value, {createError}) => customSchema[ruleName](value, createError, ...params));
                } else {
                    fieldSchema = fieldSchema[ruleName](...params);
                }
            });

            schema = schema.shape({[fieldName]: fieldSchema});
        }
    });

    return schema;
};


export const yupInstance = Yup;
export default generateSchema
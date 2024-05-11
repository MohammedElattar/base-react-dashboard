import generateSchema, {emailRules, passwordRules} from "../../../utility/helpers/validationRuleHelper"

const LoginSchema = () => {
    return generateSchema({
        email: emailRules({required: null}),
        password: passwordRules({min: null})
    })
}

export default LoginSchema

// export type nn= z.infer<ReaturnValue<typeof
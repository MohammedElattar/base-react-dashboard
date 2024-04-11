import generateSchema, {emailRules, passwordRules} from "../../../helpers/validationRuleHelper"

const LoginSchema = () => {
    return generateSchema({
        email: emailRules({required: null}),
        password: passwordRules()
    })
}

export default LoginSchema
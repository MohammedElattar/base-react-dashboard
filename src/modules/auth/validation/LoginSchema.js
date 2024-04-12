import generateSchema, {emailRules, passwordRules} from "../../../helpers/validationRuleHelper"

const LoginSchema = () => {
    return generateSchema({
        email: emailRules(),
        password: passwordRules({min: null})
    })
}

export default LoginSchema
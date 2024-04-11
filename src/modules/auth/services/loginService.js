import PropTypes from "prop-types";
import {submitListener} from "../../../utility/requestHelper";

export const handleLogin = (payload) => {
    const {isSubmitting, setIsSubmitting} = submitListener()

    setIsSubmitting(false)

    console.log(payload)

    setTimeout(() => setIsSubmitting(true), 2000)

    return {isSubmitting}
}

const LoginService = () => {
    const {isSubmitting, setIsSubmitting} = submitListener()

    const handleLogin = (payload) => {
        setIsSubmitting(true)

        console.log(payload)

        setTimeout(() => setIsSubmitting(false), 2000)
    }

    return {handleLogin, isSubmitting}
}

export default LoginService

import {lazy} from "react"
import {formikInstance} from "../../../utility/formik/formikHelper";
import loginSchema from "../validation/LoginSchema";
import LoginService from "../services/loginService";

const LoginView = lazy(() => import("../views/LoginView"))

const LoginContainer = () => {
    const {isSubmitting, handleLogin} = LoginService();
    const formik = formikInstance({
        initialValues: {email: '', password: ''},
        validationSchema: loginSchema(),
        onSubmit: (values) => handleLogin(values)
    });

    return <LoginView
        handleSubmit={formik.handleSubmit}
        formikValues={formik.values}
        handleChange={formik.handleChange}
        formikErrors={formik.errors}
        isSubmitting={isSubmitting}
    />
}

export default LoginContainer
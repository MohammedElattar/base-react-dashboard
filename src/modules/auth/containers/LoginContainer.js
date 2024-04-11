import {lazy, useRef} from "react"
import LoginSchema from "../validation/LoginSchema"
import {useFormik} from "formik";

const LoginView = lazy(() => import("../views/LoginView"))

const LoginContainer = () => {

    const submitButtonRef = useRef()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validateOnSubmit: true,
        validateOnBlur: true,
        validateOnChange: false,
        validateOnMount: false,
        enableReinitialize: true,
        validationSchema: LoginSchema(),
        onSubmit: values => {
           console.log(values)
        }
    });

    return <LoginView
        handleSubmit={formik.handleSubmit}
        submitButtonRef={submitButtonRef}
        formikValues={formik.values}
        handleChange={formik.handleChange}
        formikErrors={formik.errors}
    />
}

export default LoginContainer
import {useFormik} from "formik";
import FormikConfig from "./formikConfig";
import PropTypes from "prop-types";
import {HttpResponse} from "../../constants/api";
import toastFactory from "../factories/toastFactory";
import {isObjEmpty} from "../Utils";

export const formikInstance = (props) => {
    const formikConfig = FormikConfig(props)

    return useFormik(formikConfig)
}

export const formikErrorHandler = (response, formikObject) => {
    const {initialValues, setErrors} = formikObject;

    const errorKeys = Object.keys(initialValues);

    if (response.code === HttpResponse.VALIDATION_ERRORS) {
        const tmpErrors = {}

        errorKeys.forEach((errorKey) => {
            if (response.data[errorKey] !== undefined) {
                tmpErrors[errorKey] = response.data[errorKey]
            }
        })

        if (!isObjEmpty(tmpErrors)) {
            setErrors(tmpErrors)
        }
    }

    const responseErrorKeys = Object.keys(response.data);

    for (let i = 0; i < responseErrorKeys.length; i++) {
        if (!errorKeys.includes(responseErrorKeys[i])) {
            toastFactory.error(response.data[responseErrorKeys[i]])
            break;
        }
    }
}

export const buildFormikParams = (formik) => {
    return {
        setErrors: formik.setErrors,
        initialValues: formik.initialValues,
        setSubmitting: formik.setSubmitting
    }
}

formikInstance.propTypes = {
    initialValues: PropTypes.object,
    validationSchema: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    overrideConfig: PropTypes.object
}
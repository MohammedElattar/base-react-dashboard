import {useFormik} from "formik";
import FormikConfig from "./formikConfig";
import PropTypes from "prop-types";

export const formikInstance = (props) => {
    const formikConfig = FormikConfig(props)

    return useFormik(formikConfig)
}

formikInstance.propTypes = {
    initialValues: PropTypes.object,
    validationSchema: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    overrideConfig: PropTypes.object
}
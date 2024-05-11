import PropTypes from "prop-types";
import {FormFeedback} from "reactstrap";

const ErrorBox = ({message}) => {
    return message && <FormFeedback>{message}</FormFeedback>
}

ErrorBox.propTypes = {
    message: PropTypes.string
}

export default ErrorBox
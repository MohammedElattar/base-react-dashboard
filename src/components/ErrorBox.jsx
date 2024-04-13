import PropTypes from "prop-types";

const ErrorBox = ({message}) => {
    return message ? <span className="alert alert-danger mt-1">{message}</span> : null
}

ErrorBox.propTypes = {
    message: PropTypes.string
}

export default ErrorBox
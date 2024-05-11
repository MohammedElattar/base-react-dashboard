import PropTypes from "prop-types";

const PrimaryButton = ({title = 'Button', onClick, isLoading = false}) => {

}

PrimaryButton.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isLoading: PropTypes.bool
}
export default PrimaryButton;
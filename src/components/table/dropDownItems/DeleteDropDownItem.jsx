import { Trash } from "react-feather";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import MySwal from "sweetalert2";

const DeleteDropDownItem = ({isLoading, handleDelete}) => {
    const handleConfirmText = () => {
        return MySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-outline-danger ms-1'
            },
            buttonsStyling: false
        }).then(function (result) {
            if (result.isConfirmed === true) {
                handleDelete()
            }

            if (isLoading === false) {
                MySwal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: 'Your file has been deleted.',
                    customClass: {
                        confirmButton: 'btn btn-success'
                    }
                })
            }
        })
    }
    return (
        <>
            <Button
                onClick={handleConfirmText}
                size='sm'
                color='transparent'
                className='btn btn-icon'
            >
                <Trash className='font-medium-2' />
            </Button>
        </>
    )
}

DeleteDropDownItem.propTypes = {
    handleDelete: PropTypes.func.isRequired
}

export default DeleteDropDownItem;
import { Trash, Trash2 } from "react-feather";
import { Button, DropdownItem } from "reactstrap";

const DeleteDropDownItem = ({ handleDelete }) => {
    return <Button
        onClick={handleDelete}
        size='sm'
        color='transparent'
        className='btn btn-icon'
    >
        <Trash className='font-medium-2' />
    </Button>
}

export default DeleteDropDownItem;
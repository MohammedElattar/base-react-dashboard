import { Button} from "reactstrap";
import PropTypes from 'prop-types'
import { Edit } from "react-feather";

const EditDropDownItem = ({ onClick }) => {
    return <Button size='sm' color='transparent' className='btn btn-icon' onClick={onClick}>
        <Edit className='font-medium-2' />
    </Button>
}

EditDropDownItem.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default EditDropDownItem;
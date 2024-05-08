import { Button} from "reactstrap";
import PropTypes from 'prop-types'
import { Edit } from "react-feather";

const EditDropDownItem = ({ handleEdit }) => {
    return <Button size='sm' color='transparent' className='btn btn-icon' onClick={handleEdit}>
        <Edit className='font-medium-2' />
    </Button>
}

EditDropDownItem.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    handleEdit: PropTypes.func.isRequired
}

export default EditDropDownItem;
import { Edit, MoreVertical, Trash } from "react-feather";
import { Button, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";

const TableActions = ({actions}) => {
    console.log(actions)
    return <div className='d-flex align-items-center permissions-actions'>
          {actions}
        </div>
    
    
    
}

export default TableActions;
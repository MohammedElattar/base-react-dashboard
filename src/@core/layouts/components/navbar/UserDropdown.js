// ** React Imports
import { Link } from "react-router-dom"

// ** Custom Components
import Avatar from "@components/avatar"

// ** Third Party Components
import {
  User,
  Mail,
  CheckSquare,
  MessageSquare,
  Settings,
  CreditCard,
  HelpCircle,
  Power
} from "react-feather"

// ** Reactstrap Imports
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem
} from "reactstrap"

// ** Default Avatar Image
import {getUserData} from "../../../../modules/auth/utils/authHelper";
import {logoutUser} from "../../../../modules/auth/services/logoutService";
import profileService from "../../../../modules/auth/services/profileService";

const UserDropdown = () => {
  const profileData = getUserData();
  const {fetchProfileInfo} = profileService()
  fetchProfileInfo()

  return (
      <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
        <DropdownToggle
            href="/"
            tag="a"
            className="nav-link dropdown-user-link"
            onClick={(e) => e.preventDefault()}
        >
          <div className="user-nav d-sm-flex d-none">
            <span className="user-name fw-bold">{profileData.name}</span>
            <span className="user-status">{profileData.type}</span>
          </div>
          <Avatar
              img={profileData.avatar}
              imgHeight="40"
              imgWidth="40"
              status="online"
          />
        </DropdownToggle>
        <DropdownMenu end>
          <DropdownItem tag={Link} to="/" onClick={(e) => e.preventDefault()}>
            <User size={14} className="me-75" />
            <span className="align-middle">Profile</span>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={logoutUser}>
            <Power size={14} className="me-75" />
            <span className="align-middle">Logout</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
  )
}

export default UserDropdown
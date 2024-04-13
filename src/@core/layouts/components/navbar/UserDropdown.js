import { Link } from "react-router-dom"
import Avatar from "@components/avatar"
import {
  User,
  Power
} from "react-feather"
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem
} from "reactstrap"
import {getUserData} from "../../../../modules/auth/utils/authHelper";
import profileService from "../../../../modules/auth/services/profileService";
import {useEffect} from "react";
import {useAuthLogic} from "../../../../modules/auth/hooks/useAuthLogic";

const UserDropdown = () => {
  const profileData = getUserData();
  const {fetchProfileInfo} = profileService()
  const {dispatchLogout} = useAuthLogic()

  useEffect(() => {
    fetchProfileInfo()
  }, [])

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
          <DropdownItem onClick={dispatchLogout}>
            <Power size={14} className="me-75" />
            <span className="align-middle">Logout</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
  )
}

export default UserDropdown
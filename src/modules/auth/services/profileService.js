import {getUserData} from "../utils/authHelper";
import {useAuthLogic} from "../hooks/useAuthLogic";

const profileService = () => {
    const {fetchProfileLogic} = useAuthLogic()

    const fetchProfileInfo = async () => {
        const userData = getUserData()

        if (Object.keys(userData).length === 0) {
            console.log('data will be fetched now !', userData)
            await fetchProfileLogic()
        }
    }

    const updateProfile = (profileData) => {
        console.log(profileData)
    }

    return {fetchProfileInfo, updateProfile}
}

export default profileService
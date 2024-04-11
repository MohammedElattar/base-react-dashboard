import { Input} from "reactstrap"
import ErrorBox from "./ErrorBox";

const CustomInput = (props) => {
    return <>
        <Input {...props} />
        <ErrorBox message={props.error}/>
    </>
}

export default CustomInput
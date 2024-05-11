import {Input} from "reactstrap";

const FileInput = (...params) => {
    return <Input type='file' {...params} />
}

export default FileInput;
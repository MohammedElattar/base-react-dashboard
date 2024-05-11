import {Fragment} from 'react'
import {Modal, ModalBody, ModalHeader, Spinner} from 'reactstrap'
import '@styles/react/libs/react-select/_react-select.scss'

const FormModal = ({setShow, show, children}) => {
    return (
        <Fragment>
            <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-md'>
                <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
                <ModalBody className='px-sm-5 mx-50 pb-5'>
                    <div className='text-center mb-2'>
                        <h1 className='mb-1'>Form</h1>
                    </div>
                    {children}
                </ModalBody>
            </Modal>
        </Fragment>
    )
}

export default FormModal

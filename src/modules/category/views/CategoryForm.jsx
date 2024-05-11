import {Fragment, useEffect, useState} from 'react'
import {Button, Col, Form, Input, Label, Spinner} from 'reactstrap'
import '@styles/react/libs/react-select/_react-select.scss'
import CustomInput from "../../../components/form/CustomInput";
import {isObjEmpty} from "../../../utility/Utils";
import ErrorBox from "../../../components/form/ErrorBox";
import FormModal from "../../../components/form/modal/FormModal";

const CategoryForm = ({formFields, onSubmit}) => {
    const {errors, isSubmitting, handleChange, values, formRef} = formFields
    const [shouldSubmit, setShouldSubmit] = useState(true);

    useEffect(() => {
        setShouldSubmit(!isSubmitting && isObjEmpty(formFields.errors))
    }, [formFields.errors, isSubmitting])

    return (
        <FormModal setShow={formFields.setShow} show={formFields.show}>
            <Form className='gy-1 pt-75 row' onSubmit={onSubmit} innerRef={formRef}>
                <Col xs={12}>
                    <Label className='form-label' for='name'>
                        name
                    </Label>
                    <CustomInput
                        onBlur={formFields.handleBlur}
                        id='name'
                        name='name'
                        value={values.name}
                        placeholder='John Weck'
                        invalid={errors.name && true}
                        onChange={handleChange}
                    />
                    <ErrorBox message={errors.name} />
                </Col>
                <Col xs={12}>
                    <Label className='form-label' for='image'>
                        Image file
                    </Label>
                    <Input
                        type='file'
                        id='image'
                        name='image'
                    />
                </Col>
                <Col xs={12} className='text-center mt-2 pt-50'>
                    <Button type='submit' className='me-1' color='primary' disabled={!shouldSubmit}>
                        {isSubmitting && (<><Spinner size='sm' type='grow' /><span className='ms-50'>Loading...</span></>)}
                        {!isSubmitting && 'Submit'}
                    </Button>
                    <Button type='reset' color='secondary' outline onClick={() => formFields.setShow(false)}>
                        Discard
                    </Button>
                </Col>
            </Form>
        </FormModal>
    )
}

export default CategoryForm

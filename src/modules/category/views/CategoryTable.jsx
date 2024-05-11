import getColumns from './columns'
import {lazy, useState} from "react";
import {toastLoader} from "../../../utility/helpers/toastHelper";
import {useSelector} from "react-redux";
import {emptyCategoryForm} from "../containers/CategoryContainer";

const CustomTable = lazy(() => import('../../../components/table/CustomTable'))
const CategoryForm = lazy(() => import('./CategoryForm'))

const CategoryTable = ({
                           formFields,
                           showOne,
                            handleDelete,
                           data = {},
                           paginationObject = {},
                            setInAdd
}) => {
    const allCategoriesLoading = useSelector(state => state.loading.categories.all)
    const [isOpened, setOpen] = useState(false);
    const handleOpen = (inAdd = true) => {
        formFields.resetForm(emptyCategoryForm)
        setOpen(true)
        setInAdd(inAdd)
    }

    toastLoader(allCategoriesLoading)

    return (
        <>
            <CustomTable
                handleOpen={handleOpen}
                columns={getColumns({handleOpen, showOne, setOpen, handleDelete})}
                data={data.allCategories}
                pagination={true}
                paginationObject={paginationObject}
                handlePageChange
                title='Categories'
            />

            <CategoryForm
                show={isOpened}
                setShow={setOpen}
                formFields={{...formFields, setShow: setOpen, show: isOpened}}
                onSubmit={(values) => formFields.handleSubmit(values)}
            />
        </>
    );
}

export default CategoryTable;
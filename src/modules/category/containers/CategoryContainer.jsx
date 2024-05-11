import {lazy, useRef, useState} from "react";
import useCategoryLogic from "../hooks/useCategoryLogic";
import usePagination from "../../../utility/hooks/usePagination";
import {buildFormikParams, formikInstance} from "../../../utility/formik/formikHelper";
import categoriesSchema from '../validation'
import {isObjEmpty} from "../../../utility/Utils";

const CategoryTable = lazy(() => import('../views/CategoryTable'));

export const emptyCategoryForm = {
    name: ''
};

const CategoryContainer = () => {
    const {
        allCategories,
        allCategoriesMeta,
        oneCategory,
        getAllCategoriesLogic,
        getOneCategoryLogic,
        storeCategoryLogic,
        updateCategoryLogic,
        deleteCategoryLogic
    } = useCategoryLogic();

    const [inAdd, setInAdd] = useState(isObjEmpty({}))
    const formRef = useRef(null)
    const formik = formikInstance({
        initialValues: inAdd ? emptyCategoryForm : {
            name: oneCategory.name
        },
        validationSchema: categoriesSchema,
        onSubmit: () => {
            const formData = new FormData(formRef.current)

            if (inAdd) {
                storeCategoryLogic(formData, buildFormikParams(formik))
            } else {
                updateCategoryLogic(formData, oneCategory.id, buildFormikParams(formik))
            }
        }});

    const {
        currentPerPage,
        currentPage,
        setCurrentPageState,
        handlePageChange,
        handlePerPageChange
    } = usePagination(getAllCategoriesLogic, allCategoriesMeta);

    const {
        values,
        errors,
        handleChange,
        isSubmitting,
        handleSubmit,
        handleBlur,
        isValid,
        resetForm,
        setValues
    } = formik

    return (
        <CategoryTable
            data={{allCategories, oneCategory}}
            showOne={getOneCategoryLogic}
            handleDelete={(id) => deleteCategoryLogic(id, formik.setSubmitting)}
            formFields={{
                formRef,
                values,
                errors,
                isSubmitting,
                handleChange,
                handleSubmit,
                isValid,
                handleBlur,
                resetForm,
                setValues
        }}
            setInAdd={setInAdd}
            paginationObject={{
                meta: allCategoriesMeta,
                currentPerPage,
                currentPage,
                setCurrentPageState,
                handlePageChange,
                handlePerPageChange
            }}
        />
    );
};

export default CategoryContainer;

import { useDispatch, useSelector } from "react-redux";
import axiosInstance from '../../../api/axiosInstance'
import {setAllCategoriesAction, setAllCategoriesMetaAction, setOneCategoryAction} from "../redux";
import { getUniqueParams } from "../../../utility/helpers/routeHelper";
import {allCategoriesLoadingAction} from "../redux/loading";
import {formikErrorHandler} from "../../../utility/formik/formikHelper";

const useCategoryLogic = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state.categoryReducer),
        allCategories = selector.all.data,
        allCategoriesMeta = selector.all.meta,
        oneCategory = selector.show;

    const getAllCategoriesLogic = (params = undefined) => {
        params = params === undefined ? getUniqueParams() : params;

        dispatch(allCategoriesLoadingAction(true))

        axiosInstance.get('/admin/categories', { params }).then((response) => {
            dispatch(setAllCategoriesAction(response.data.data))
            dispatch(setAllCategoriesMetaAction(response.data.meta))
        }).finally(() => {
            dispatch(allCategoriesLoadingAction(false))
        })
    }

    const getOneCategoryLogic = (id) => {
        axiosInstance.get(`/admin/categories/${id}`).then(response => {
            dispatch(setOneCategoryAction(response.data.data))
        })
    }

    const storeCategoryLogic = (values, formikObject) => {
        const {setSubmitting} = formikObject;

        axiosInstance.postForm('/admin/categories', values)
            .then(() => {
                getAllCategoriesLogic()
            })
            .catch((error) => formikErrorHandler(error.response.data, formikObject))
            .finally(() => setSubmitting(false))
    }

    const updateCategoryLogic = (values, id, formikObject) => {
        const {setSubmitting} = formikObject;

        axiosInstance.postForm(`/admin/categories/${id}`, values)
            .then(() => {
                getAllCategoriesLogic()
            })
            .catch((error) => formikErrorHandler(error.response.data, formikObject))
            .finally(() => setSubmitting(false))
    }

    const deleteCategoryLogic = (id, setSubmitting) => {
        axiosInstance.delete(`/admin/categories/${id}`)
            .then(() => getAllCategoriesLogic())
            .finally(() => setSubmitting(false))
    }

    return {
        allCategories,
        allCategoriesMeta,
        oneCategory,
        getAllCategoriesLogic,
        getOneCategoryLogic,
        storeCategoryLogic,
        updateCategoryLogic,
        deleteCategoryLogic
    }
}

export default useCategoryLogic;
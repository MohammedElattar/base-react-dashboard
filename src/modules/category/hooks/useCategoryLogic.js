import { useDispatch, useSelector } from "react-redux";
import axiosInstance from '../../../api/axiosInstance'
import { setAllCategoriesAction, setAllCategoriesLoading, setAllCategoriesMetaAction } from "../redux";
import { getUniqueParams } from "../../../helpers/routeHelper";

const useCategoryLogic = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state.categoryReducer),
        allCategories = selector.all.data,
        allCategoriesLoading = selector.all.loading,
        allCategoriesMeta = selector.all.meta;

    const getAllCategoriesLogic = (params = {}) => {
        params = Object.keys(params).length === 0 ? getUniqueParams() : params;

        dispatch(setAllCategoriesLoading(true))

        axiosInstance.get('/admin/categories', { params }).then((response) => {
            dispatch(setAllCategoriesAction(response.data.data))
            dispatch(setAllCategoriesMetaAction(response.data.meta))
        }).finally(() => {
            dispatch(setAllCategoriesLoading(false))
        })

    }

    return {
        allCategories,
        allCategoriesMeta,
        allCategoriesLoading,
        getAllCategoriesLogic
    }
}

export default useCategoryLogic;
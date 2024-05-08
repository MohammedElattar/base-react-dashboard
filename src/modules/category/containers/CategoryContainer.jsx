import { lazy, useEffect, useState } from "react";
import useCategoryLogic from "../hooks/useCategoryLogic";
import { getValidPageNumber, getValidPerPage, updatePaginationParams } from "../../../helpers/paginationHelper";

const CategoryTable = lazy(() => import('../views/CategoryTable'));

const CategoryContainer = () => {
    const { 
        allCategories, 
        getAllCategoriesLogic, 
        allCategoriesMeta,
        allCategoriesLoading
    } = useCategoryLogic();
    const [currentPerPage, setCurrentPerPage] = useState(getValidPerPage())
    const [currentPage, setCurrentPageState] = useState(getValidPageNumber())

    useEffect(() => {
        getAllCategoriesLogic()
    }, [currentPage, currentPerPage])

    const handlePageChange = (page) => {
        setCurrentPageState(page)
        updatePaginationParams(page, currentPerPage)
    }

    const handlePerPageChange = (perPage) => {
        setCurrentPerPage(perPage)
        updatePaginationParams(currentPage, perPage)
        setCurrentPerPage(perPage)
        // getAllCategoriesLogic()
    }

    const handleSearch = (value) => {
        console.log(value)
    }

    return <CategoryTable
        data={allCategories}
        handleSearch={handleSearch}
        allCategoriesLoading={allCategoriesLoading}
        paginationObject={{ 
            meta: allCategoriesMeta, 
            currentPerPage, 
            currentPage,
            handlePageChange, 
            handlePerPageChange,
            setCurrentPageState
        }}
    />
}

export default CategoryContainer;
import toast from 'react-hot-toast';
import columns from './columns'
import { lazy, useEffect } from "react";

const CustomTable = lazy(() => import('../../../components/CustomTable'))

const CategoryTable = ({ data = [], paginationObject = {}, allCategoriesLoading }) => {

    useEffect(() => {
        if (allCategoriesLoading) {
            toast.loading('Loading', {id: 'categories-loading'})
        } else {
            toast.dismiss('categories-loading')
        }
    }, [allCategoriesLoading])

    return <CustomTable
        columns={columns}
        data={data}
        pagination={true}
        paginationObject={paginationObject}
        handlePageChange
        title='Categories'
    />
}

export default CategoryTable;
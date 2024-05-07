import { lazy } from "react"

const Pagination = lazy(() => import('../components/PaginationComponent'))
export const paginationComponent = (args) => {
    return <Pagination {...args} />
}
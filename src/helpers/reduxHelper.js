export const paginationInitialValues = () => {
    return {
        meta: {
            currentPage: 1,
            from: 1,
            lastPage: 1
        }
    }
}


export const setPaginationAction = (action) => {
    return {
        from: action.payload.from,
        currentPage: action.payload.current_page,
        lastPage: action.payload.last_page
    }
}
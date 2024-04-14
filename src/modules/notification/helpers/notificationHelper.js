export const formatUnreadNotificationsCount = (value) => {
    return value === 0 ? null : (value > 99 ? `99+` : value)
}

export const shouldFetchNextPage = () => {

}
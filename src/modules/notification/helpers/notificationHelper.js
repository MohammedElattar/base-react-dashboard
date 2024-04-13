export const formatUnreadNotificationsCount = (value) => {
    return value === 0 ? null : (value > 99 ? `${value}+` : value)
}
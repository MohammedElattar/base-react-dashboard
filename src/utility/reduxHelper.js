export const RESET_REDUCER_KEY = 'defaultStateAction'

export const resetStoreMethod = (initialState) => {
    return {
        defaultStateAction: () => initialState
    }
}
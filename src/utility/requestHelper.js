export const handleRoute = (path, bindings) => {
    Object.keys(bindings).forEach((key) => {
        path = path.replace(`{${key}}`, bindings[key])
    })

    return path;
}
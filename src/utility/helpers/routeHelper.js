export const parseRoute = (url = '', bindings = {}) => {
    let routePath = url;
    for (const [key, value] of Object.entries(bindings)) {
        routePath = routePath.replace(`:${key}`, value);
    }

    return routePath;
}

export function getUniqueParams() {
    const urlParams = new URLSearchParams(window.location.search);

    const uniqueParams = new Set();
    
    urlParams.forEach((value, key) => {
        uniqueParams.add(key);
    });
    
    const uniqueParamsArray = Array.from(uniqueParams);

    const uniqueUrlParams = new URLSearchParams();

    uniqueParamsArray.forEach((item) => uniqueUrlParams.append(item, urlParams.get(item)));

    return uniqueUrlParams;
}
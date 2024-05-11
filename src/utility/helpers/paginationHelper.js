import { lazy } from "react"

const Pagination = lazy(() => import('../../components/table/PaginationComponent'))
import { getUniqueParams } from "./routeHelper";

export const paginationComponent = (args) => {
    return <Pagination {...args} />
}

export function getValidPageNumber(page) {
    page = Number.parseInt(page);
    if (!Number.isInteger(page) || page < 1) {
        page = 1;
    }
    return page;
}

export function getValidPerPage(perPage) {
    perPage = Number.parseInt(perPage);
    if (!Number.isInteger(perPage) || (perPage < 5 || perPage > 100)) {
        perPage = 5;
    }
    return perPage;
}

export function getCurrentPage() {
    const { page } = getUniqueParams(); // Assuming you have defined a 'page' parameter in your route
    return getValidPageNumber(page);
}

export function getPerPage() {
    const { perPage } = getUniqueParams(); // Assuming you have defined a 'perPage' parameter in your route
    return getValidPerPage(perPage);
}

export function getNextPageNumber() {
    let currentPage = getCurrentPage();
    return ++currentPage;
}

export function getPreviousPageNumber() {
    let currentPage = getCurrentPage();
    if (currentPage <= 1) {
        return 1;
    }
    return --currentPage;
}

export function updatePaginationParams(page, perPage) {
    const updatedParams = new URLSearchParams(window.location.search);
    updatedParams.set('page', getValidPageNumber(page).toString());
    updatedParams.set('per_page', getValidPerPage(perPage).toString());
    const newUrl = `${window.location.pathname}?${updatedParams.toString()}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
}


export function generatePaginationParams(page, perPage) {
    page = getCurrentPage()
    perPage = getPerPage()

    return {page, per_page: perPage}
}
// paginationLogic.js
import { useEffect, useState } from "react";
import {getValidPageNumber, getValidPerPage, updatePaginationParams} from "../helpers/paginationHelper";

const usePagination = (getAllDataLogic, meta) => {
    const [currentPerPage, setCurrentPerPage] = useState(getValidPerPage());
    const [currentPage, setCurrentPageState] = useState(getValidPageNumber());

    useEffect(() => {
        getAllDataLogic();
    }, [currentPage, currentPerPage]);

    useEffect(() => {
        setCurrentPerPage(meta.perPage);
        setCurrentPageState(meta.currentPage);
    }, [meta]);

    const handlePageChange = (page) => {
        setCurrentPageState(page);
        updatePaginationParams(page, currentPerPage);
    };

    const handlePerPageChange = (perPage) => {
        setCurrentPerPage(perPage);
        updatePaginationParams(currentPage, perPage);
        setCurrentPerPage(perPage);
    };

    return {
        currentPerPage,
        currentPage,
        handlePageChange,
        handlePerPageChange,
        setCurrentPageState
    };
};

export default usePagination;

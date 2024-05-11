import {useEffect} from "react";
import toastFactory from "../factories/toastFactory";

export const toastLoader = (isLoading = false) => {
    useEffect(() => {
        if (isLoading) {
            toastFactory.dismiss()
            toastFactory.loading('Loading')
        } else {
            toastFactory.dismiss()
        }
    }, [isLoading])
}
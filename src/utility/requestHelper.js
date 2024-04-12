import {useState} from "react";

export const submitListener = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)

    return [
        isSubmitting,
        setIsSubmitting
    ]
}
import toast from "react-hot-toast";

const toastFactory = {
    success: (message) => toast.success(message),
    error: (message) => toast.error(message),
    loading: (message) => toast.loading(message),
    dismiss: () => toast.dismiss()
};

export default toastFactory;
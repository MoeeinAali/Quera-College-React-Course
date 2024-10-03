import { toast, TypeOptions } from 'react-toastify';

const defaultOptions = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
};

const useToast = () => {
    const showToast = (message: string, type: TypeOptions) => {
        toast(message, { ...defaultOptions, type });
    };

    const showError = (message: string) => {
        showToast(message, 'error');
    };

    const showSuccess = (message: string) => {
        showToast(message, 'success');
    };

    const showInfo = (message: string) => {
        showToast(message, 'info');
    };

    const showWarning = (message: string) => {
        showToast(message, 'warning');
    };

    return { showError, showSuccess, showInfo, showWarning };
};

export default useToast;

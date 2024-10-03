import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import searchFormValidation from '../core/validations/searchForm.validation';
import searchRepos from '../core/api/get/searchRepos';
import { useNavigate } from 'react-router-dom';

interface IFormData {
    searchQuery: string;
}

export const useSearchForm = (setRepositories: (repositories: any[]) => void) => {
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(searchFormValidation)
    });

    const onSubmit: SubmitHandler<IFormData> = async (data) => {
        setLoading(true);
        try {
            const res = await searchRepos(data.searchQuery);
            navigate(`/repositories/search?query=${data.searchQuery}`);
            setRepositories(res);
        } catch (error) {
            console.error("Error fetching user data:", error);
        } finally {
            setLoading(false);
        }
    };

    return { register, handleSubmit: handleSubmit(onSubmit), errors, loading };
};

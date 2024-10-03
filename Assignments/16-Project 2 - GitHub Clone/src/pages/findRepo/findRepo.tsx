import React from 'react';
import { useAppContext } from '../../context/App.context';
import Layout from '../../components/header/layout/layout';
import SearchForm from '../../components/findRepo/findRepo';
import { useSearchForm } from '../../customHooks/useSearchForm';

const FindRepo: React.FC = () => {
    const { setRepositories } = useAppContext();
    const { register, errors, loading, handleSubmit } = useSearchForm(setRepositories);

    return (
        <Layout noLayoutContent={true}>
            <SearchForm register={register} errors={errors} loading={loading} onSubmit={handleSubmit} />
        </Layout >
    );
};

export default FindRepo;

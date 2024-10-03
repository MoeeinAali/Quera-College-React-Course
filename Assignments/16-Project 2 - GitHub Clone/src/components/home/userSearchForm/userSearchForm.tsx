import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import githubImage from '../../../assets/images/githubl.png';
import Input from '../../common/input';

interface UserSearchFormProps {
    register: UseFormRegister<FieldValues>;
    errors: any;
    loading: boolean;
    isDisabled?: () => boolean;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const UserSearchForm: React.FC<UserSearchFormProps> = ({ register, errors, isDisabled, onSubmit, loading }) => (
    <main className="min-h-screen bg-gray-100 py-12 flex flex-col justify-center sm:py-20">
        <div className="border text-card-foreground max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden" data-v0-t="card">
            <div className="sm:flex sm:items-center px-6 py-4">
                <img className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full" src={githubImage} alt="GitHub Logo" />
                <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                    <p className="text-xl leading-tight">GitHub User Search</p>
                    <p className="text-sm leading-tight text-gray-600">Enter a GitHub username to find user profiles.</p>
                </div>
            </div>
            <form className="px-6 py-4" onSubmit={onSubmit}>
                <div className="flex space-x-2">
                    <Input type={'search'} placeHolder={'GitHub username'} register={register("searchQuery")} />
                    <button
                        className={`inline-flex bg-[#1F2937] text-white items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ${isDisabled && isDisabled() ? 'disabled' : ''}`}
                        disabled={isDisabled && isDisabled()}
                    >
                        {loading ? <span className='animate-ping'>🔍</span> : 'Search'}
                    </button>
                </div>
                {errors.searchQuery && <span className='text-red-500 text-md block mt-2'>{errors.searchQuery.message}</span>}

            </form>
        </div>
    </main>
);

export default UserSearchForm;
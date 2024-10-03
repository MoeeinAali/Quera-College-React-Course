import React from 'react'
import Pagination from '../../pagination/pagination'
import RepositoryCart from '../repositoryCart/repositoryCart'

interface IRepositoriesData {
    currentRepos: any[],
    totalPages: number,
    currentPage: number,
    changePage: any
}
const RepositoriesData: React.FC<IRepositoriesData> = ({ currentRepos, changePage, currentPage, totalPages }) => {
    return (
        <div className='ml-10 border border-gray-300 px-3 rounded-lg flex flex-col justify-between'>
            <h2 className='text-xl font-semibold mt-3'>📚 Repositories</h2>
            <div className='grid grid-cols-2 gap-4 align-items-start mt-3'> {/* Updated this line */}
                {currentRepos && currentRepos.length > 0 ? (
                    currentRepos.map((repo: any, key: any) => (
                        <RepositoryCart key={key} name={repo.name} full_name={repo.full_name} language={repo.language} to={`/${repo.owner.login}/${repo.name}`} />
                    ))
                ) : (
                    <p>No repositories found.</p>
                )}
            </div>
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                changePage={changePage}
            />
        </div>
    )
}

export default RepositoriesData
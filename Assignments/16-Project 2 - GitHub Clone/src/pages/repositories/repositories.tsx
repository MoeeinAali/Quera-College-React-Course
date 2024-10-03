import { useEffect, useState } from 'react'
import { useAppContext } from '../../context/App.context';

import { useLocation, useNavigate } from 'react-router-dom';

import Layout from '../../components/header/layout/layout'
import searchRepos from '../../core/api/get/searchRepos';
import Input from '../../components/common/input';
import Pagination from '../../components/pagination/pagination';
import RepoCard from '../../components/repoCard/repoCard';
import Loading from '../../components/loading/loading';

const Repositories = () => {
  const { repositories, setRepositories } = useAppContext()

  const navigate = useNavigate()
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const myParam = queryParams.get('query');

  const [searchedQuery, setSearchedQuery] = useState<string>(myParam!)
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState<boolean>(true)
  const ITEMS_PER_PAGE = 5;





  const searchRepoHandler = async () => {
    navigate(`/repositories/search?query=${searchedQuery}`)
    setLoading(true)
    const res = await searchRepos(searchedQuery);
    setRepositories(res);
    setTotalPages(Math.ceil(res.length / ITEMS_PER_PAGE));
    setLoading(false)
  };

  useEffect(() => {
    if (!repositories.length || myParam !== searchedQuery) {
      searchRepoHandler();
    } else {
      setTotalPages(Math.ceil(repositories.length / ITEMS_PER_PAGE));
      setLoading(false);
    }
  }, [myParam, repositories]);

  const changePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const currentRepos = repositories.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  console.log(currentRepos)
  return (
    <Layout>
      <div className='ml-10 border border-gray-300 p-5 rounded-lg w-[60rem] shadow-lg'>
        <h2 className='text-xl font-semibold'>📚 Search Result of : {myParam}</h2>
        <div className='mt-3 flex items-end'>
          <div className="flex w-full">
            <Input
              label={'Search for Repo '}
              type={'search '}
              placeHolder={'search for repo'}
              className='w-[23rem]'
              value={searchedQuery}
              onChange={(e) => setSearchedQuery(e.target.value)}
            />
            <button onClick={searchRepoHandler} className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#181818] text-white  h-10 px-4 py-2 ml-2">
              {loading ? <span className='animate-ping'>🔍</span> : 'Search'}
            </button>
          </div>
        
        </div>
        <div className='grid grid-cols-1'>
          {loading ? <Loading /> : <> <div className='grid grid-cols-1'>
            {currentRepos.map((repo: any, key: number) => (
              <RepoCard key={key} repo={repo} />
            ))}
          </div>
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              changePage={changePage}
            />
          </>}

        </div>

      </div>

    </Layout>
  )
}

export default Repositories
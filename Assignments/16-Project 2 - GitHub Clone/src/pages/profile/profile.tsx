import { useEffect, useState } from 'react'
import { useAppContext } from '../../context/App.context'
import { useParams } from 'react-router-dom'

import Layout from '../../components/header/layout/layout'

import UserCart from '../../components/profile/userCart/userCart'
import RepositoriesData from '../../components/profile/repositories/repositories'

import getUserProfileApi from '../../core/api/get/getUserProfile.api'

const Profile = () => {
    const { user, setUser } = useAppContext();
    const { username } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const reposPerPage = 8;

    const getUserReposHandler = async () => {
        setUser({ userProfile: {} })
        const res: any = await getUserProfileApi(username || "");
        if (res.status !== 404) {
            setUser(res);
        }
    };

    const indexOfLastRepo = currentPage * reposPerPage;
    const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
    const currentRepos = user.userRepos?.slice(indexOfFirstRepo, indexOfLastRepo);

    const totalPages = Math.ceil(user.userRepos?.length / reposPerPage);

    const changePage = (pageNumber: any) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        getUserReposHandler();
    }, [username]);

    return (
        <Layout>

            <div className='flex flex-col align-self-start'>
                {user.userProfile && (
                    <UserCart
                        avatar={user.userProfile.avatar_url}
                        name={user.userProfile.name}
                        login={user.userProfile.login}
                        bio={user.userProfile.bio}
                        followers={user.userProfile.followers}
                        following={user.userProfile.following}
                        location={user.userProfile.location}
                        blog={user.userProfile.blog}
                    />
                )}
            </div>


            <RepositoriesData currentRepos={currentRepos} totalPages={totalPages} currentPage={currentPage} changePage={changePage} />



        </Layout >
    );
};

export default Profile;

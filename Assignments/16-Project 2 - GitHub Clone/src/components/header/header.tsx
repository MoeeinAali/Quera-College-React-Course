import Logo from '../../assets/images/github.png'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation();

    const isActive = (pathname: string) => location.pathname === pathname;

    return (
        <nav className="bg-[#181818]">
            <div className="container mx-auto  ">
                <div className="relative flex h-16 items-center justify-between">

                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <Link to={"/"} >
                                <img
                                    className="h-8 w-auto"
                                    src={Logo}
                                    alt="logo"
                                />
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">

                                <Link
                                    to={"/"}
                                    className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/') ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                        }`}
                                    aria-current={isActive('/') ? 'page' : undefined}
                                >
                                    Find User
                                </Link>
                                <Link
                                    to="/findrepo"
                                    className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/findrepo') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                        }`}
                                >
                                    Find Repo
                                </Link>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <Link
                        to={"/"}
                        className={` text-white block rounded-md px-3 py-2 text-base font-medium ${isActive('/findrepo') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                        aria-current="page"
                    >
                        Find User
                    </Link>
                    <Link
                        to="/findrepo"
                        className={`text-gray-300 hover:bg-gray-700 hover:text-white block ${isActive('/findrepo') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} rounded-md px-3 py-2 text-base font-medium`}
                    >
                        Find Repo
                    </Link>


                </div>
            </div>
        </nav>

    )
}

export default Header
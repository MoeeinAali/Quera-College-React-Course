import React from 'react';

import Header from '../header';

import ILayoutProps from '../../../core/interfaces/props/ilayout.prop';



const Layout: React.FC<ILayoutProps> = ({ children, noLayoutContent }) => {
    return (
        <>
            <Header />
            {noLayoutContent ? children : <div className='flex justify-center mt-24  mx-auto max-w-7xl  py-3'>
                {children}
            </div>}

        </>
    );
};

export default Layout;

import React from 'react';

import IPaginationProps from '../../core/interfaces/props/Ipagination.prop';



const Pagination: React.FC<IPaginationProps> = ({ totalPages, currentPage, changePage }) => {
    return (
        <>
            <div className="flex justify-center mt-4 mb-4">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                    <button
                        onClick={() => changePage(number)}
                        key={number}
                        className={`${currentPage === number ? "bg-[#18181B] text-white" : "text-black"} 
                        inline-flex 
                        items-center 
                        justify-center
                         rounded-md 
                         text-sm 
                         font-medium 
                         ring-offset-background 
                         transition-colors 
                         focus-visible:outline-none 
                         focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border  text-primary-foreground  h-10 px-4 py-2 mx-2`} >
                        {number}
                    </button>
                ))}

            </div>
        </>

    );
};

export default Pagination;

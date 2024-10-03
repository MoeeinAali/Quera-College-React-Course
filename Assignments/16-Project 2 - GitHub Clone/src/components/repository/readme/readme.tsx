// Readme.tsx
import React from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

interface IReadMe {
    readme: string;
}

const Readme: React.FC<IReadMe> = ({ readme }) => {
    const markdown = marked.parse(readme);

    const sanitizedHTML = DOMPurify.sanitize(markdown);

    return (<>

        <div className='ml-10 mt-7 border border-gray-300 p-5 rounded-lg w-[60rem]'
        >
            <h2 className='text-3xl mb-2'>README.md</h2>
            <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }}></div>
        </div>
    </>
    );
};

export default Readme;

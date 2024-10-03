import React from 'react';

import { Link } from 'react-router-dom';

import IFileTreeProps from '../../core/interfaces/props/IfileTree.prop.ts'

const FileTree: React.FC<IFileTreeProps> = ({ fileTree, repo, username }) => {
    return (
        <div className='grid grid-cols-1 mt-3 gap-4'>
            {fileTree.map((item, index) => (
                <Link
                    className='cursor-pointer'
                    to={`/${username}/${repo}/content?path=${item.path}&type=${item.type}`}
                    key={index}
                >
                    {item.type === "blob" ? `📄 ${item.path}` : `📁 ${item.path}`}
                </Link>
            ))}

        </div>
    );
};

export default FileTree;

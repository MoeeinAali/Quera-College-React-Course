import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Layout from '../../components/header/layout/layout';
import getRepoFileContent from '../../core/api/get/getRepoFileContent';

import { useAppContext } from '../../context/App.context';
import UserCart from '../../components/profile/userCart/userCart';
import FileViewer from '../../components/fileViewer/fileViewer';
import getRepoFileTree from '../../core/api/get/getRepoFileTree.api';
import FileTree from '../../components/fileTree/fileTree';
import RepositoryContent from '../../components/fileContent/repositoryContent/repositoryContent';
import UserProfileCard from '../../components/fileContent/userProfileCard/userProfileCard';

const FileContent = () => {
    const { user } = useAppContext();
    const { username, repo } = useParams();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const path = queryParams.get('path');
    const type = queryParams.get('type');

    const [content, setContent] = useState('');
    const [fileLanguage, setFileLanguage] = useState('');
    const [fileTree, setFileTree] = useState<any>([])
    const [imageUrl, setImageUrl] = useState('');


    const determineFileLanguage = (filePath: any) => {
        return filePath.split('.').pop();
    };

    const checkIfImage = (filePath: any) => {
        const imageExtensions = ['png', 'jpg', 'jpeg', 'gif', 'bmp', 'svg', 'ico'];
        const extension = filePath.split('.').pop().toLowerCase();
        return imageExtensions.includes(extension);
    };

    const getContentHandler = async () => {
        if (type === 'blob' || type === "file") {
            const res: any = await getRepoFileContent(username!, repo!, path!);
            if (res && checkIfImage(path)) {
                setImageUrl(res.download_url);
            } else if (res && res.encoding === 'base64') {
                const decodedContent = atob(res.content);
                setContent(decodedContent);
                const language = determineFileLanguage(path);
                setFileLanguage(language);
            }
        } else if (type === 'tree' || type === "dir") {
            const folderContent = await getRepoFileTree(username!, repo!, path!);
            setFileTree(folderContent);
        }
    };


    useEffect(() => {
        getContentHandler();
    }, [username, repo, path, type]);

    return (
        <Layout>
            {user.userProfile && <UserProfileCard user={user.userProfile} />}

            <RepositoryContent
                type={type}
                imageUrl={imageUrl}
                content={content}
                fileLanguage={fileLanguage}
                fileTree={fileTree}
                repo={repo}
                username={username}
            />
        </Layout>
    )
}

export default FileContent;


import FileTree from "../../fileTree/fileTree";
import FileViewer from "../../fileViewer/fileViewer";
import ImageContent from "../imageContent/imageContent";

const RepositoryContent = ({ type, imageUrl, content, fileLanguage, fileTree, repo, username }) => (
    <div className='ml-10 border border-gray-300 p-5 rounded'>
        <h2 className='text-xl font-semibold'>📚 Repository</h2>
        <div className='w-[40rem] mt-10'>
            {imageUrl ? <ImageContent imageUrl={imageUrl} /> :
                (type === "blob" || type === "file") ? <FileViewer fileContent={content} language={fileLanguage} /> :
                    <FileTree fileTree={fileTree} repo={repo} username={username} />}
        </div>
    </div>
);

export default RepositoryContent
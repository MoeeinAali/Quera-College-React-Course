interface IFileTreeProps {
    fileTree: Array<{
        path: string;
        type: string;
    }>;
    repo: string;
    username: string
}

export default IFileTreeProps
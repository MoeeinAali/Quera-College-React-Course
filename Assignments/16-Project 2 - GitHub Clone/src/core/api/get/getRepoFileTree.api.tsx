import { Octokit } from 'octokit';

const octokit = new Octokit({
    auth: "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", // Replace with your actual GitHub token
});

const getRepoFileTree = async (username: string, repo: string, path?: string) => {
    try {
        if (path) {
            console.log(path)
            const contents = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
                owner: username,
                repo: repo,
                path: path
            });
            return contents.data; // Returns the contents of the folder
        } else {
            // Fetching the root tree
            const branch = await octokit.request('GET /repos/{owner}/{repo}/branches/{branch}', {
                owner: username,
                repo: repo,
                branch: 'master'
            });
            const tree = await octokit.request('GET /repos/{owner}/{repo}/git/trees/{tree_sha}', {
                owner: username,
                repo: repo,
                tree_sha: branch.data.commit.sha
            });
            return tree.data.tree; // Returns the root tree
        }
    } catch (error) {
        console.error("Error fetching repository file tree:", error);
        return null;
    }
};


export default getRepoFileTree;

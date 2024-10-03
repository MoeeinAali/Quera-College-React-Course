import { Octokit } from 'octokit';

const octokit = new Octokit({
    auth: "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", // Replace with your actual GitHub token
});

const getRepoFileContent = async (username: string, repo: string, path: string) => {
    try {
        const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
            owner: username,
            repo: repo,
            path: path
        });
        return response.data; // The file content
    } catch (error) {
        console.error("Error fetching file content:", error);
        return null;
    }
};


export default getRepoFileContent
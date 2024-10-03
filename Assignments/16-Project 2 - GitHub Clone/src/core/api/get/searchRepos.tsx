import { Octokit } from 'octokit';

const octokit = new Octokit({
    auth: "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", // Replace with your actual GitHub token
});

const searchRepos = async (query:string) => {
    try {
        const response = await octokit.request('GET /search/repositories', {
            q: query
        });
        return response.data.items; 
    } catch (error) {
        console.error("Error searching repositories:", error);
        return [];
    }
};

export default searchRepos;

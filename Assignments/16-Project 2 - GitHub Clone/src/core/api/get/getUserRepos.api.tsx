import { Octokit } from 'octokit';

const octokit = new Octokit({
    auth: "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", // Replace with your actual GitHub token
});

const getUserRepos = async (username: string) => {
    try {
        const userReposResponse = await octokit.request('GET /users/{username}/repos', {
            username: username
        });
        return  userReposResponse.data
       

    } catch (error) {
        return error
    }
};

export default getUserRepos;

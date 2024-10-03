import { Octokit } from 'octokit';

const octokit = new Octokit({
    auth: "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", // Replace with your actual GitHub token
});

const getUserProfileApi = async (username: string): Promise<any> => {
    try {
        const userProfileResponse = await octokit.request('GET /users/{username}', {
            username: username
        });
        const userReposResponse = await octokit.request('GET /users/{username}/repos', {
            username: username
        });
        return {
            userProfile: userProfileResponse.data,
            userRepos: userReposResponse.data
        };
    } catch (error) {
        return error
    }
};

export default getUserProfileApi;

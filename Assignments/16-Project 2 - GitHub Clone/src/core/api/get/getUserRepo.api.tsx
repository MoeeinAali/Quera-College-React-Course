
import { Octokit } from 'octokit'

const octokit = new Octokit({
  auth: "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",
});

const getUserRepo = async (username: string, repo: string) => {
  try {
    const response = await octokit.request('GET /repos/{owner}/{repo}', {
      owner: username,
      repo: repo,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });
    return response.data
  } catch (error) {
    console.error("Error fetching repository data:", error);
    return error
  }
}

export default getUserRepo
import React from 'react';
import { Link } from 'react-router-dom';
import { IRepoCardProps } from '../../core/interfaces/props/Irepo.prop';
import StarIcon from '../icons/starIcon';
import GitForkIcon from '../icons/gitForkIcon';

// Define a type or interface for the repo prop

const getLanguageColor = (language: string) => {
  switch (language) {
    case 'C#':
      return 'bg-purple-600';
    case 'JavaScript':
      return 'bg-yellow-400';
    case 'TypeScript':
      return 'bg-blue-800'
    case 'SCSS':
      return 'bg-purple-500'
    default:
      return 'bg-gray-400';
  }
};
const RepoCard: React.FC<IRepoCardProps> = ({ repo }) => {
  return (
    <div
      className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col md:flex-row md:items-center gap-4 p-4 mt-4"
    >
      <div className="flex-1 space-y-2">
        <Link to={`/${repo.owner.login}/${repo.name}`} className="text-lg font-bold" >
          {repo.name}
        </Link>
        <p className="text-sm text-gray-500">{repo.description}</p>
        <div className="flex items-center gap-2">
          {repo.language && <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-[#18181B] text-white ">
            {repo.language}
          </div>}

          <StarIcon />
          <span>{repo.stargazers_count}</span>
          <GitForkIcon />
          <span>{repo.forks}</span>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          <p>{repo.owner.login}</p>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;

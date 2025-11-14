import React from 'react';
import { Project } from '../types';
import { GitHubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, tags, image, source_code_link } = project;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
      <div className="relative bg-gray-100 dark:bg-gray-900">
        <img src={image} alt={title} className="w-full h-64 object-contain" />
        <div className="absolute top-4 right-4 flex gap-2">
          {source_code_link && (
            <a href={source_code_link} target="_blank" rel="noopener noreferrer" className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:opacity-80 transition-opacity" title="View Source Code">
              <GitHubIcon className="w-6 h-6 text-white" />
            </a>
          )}
        </div>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-secondary flex-grow">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag.name} className={`text-xs font-semibold px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300`}>
              # {tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
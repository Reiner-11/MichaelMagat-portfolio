import React from 'react';
import { GitHubIcon, LinkedInIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 dark:bg-tertiary py-8">
      <div className="container mx-auto px-6 sm:px-16 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <p className="text-sm text-gray-600 dark:text-secondary mb-4 sm:mb-0">
          © {new Date().getFullYear()} Michael Reiner Magat. All Rights Reserved.
        </p>
        <div className="flex space-x-6">
          <a href="https://github.com/Reiner-11" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-secondary hover:text-blue-500 dark:hover:text-white transition-colors">
            <GitHubIcon className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/michael-magat-32200538a/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-secondary hover:text-blue-500 dark:hover:text-white transition-colors">
            <LinkedInIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { projects } from '../constants';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-200 dark:bg-tertiary">
      <div className="container mx-auto px-6 sm:px-16">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">My Projects</h2>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          Here are some of the projects I've worked on. Each project showcases my skills in creating modern, responsive, and functional web applications.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, projectIndex) => (
            <ProjectCard key={`project-${projectIndex}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
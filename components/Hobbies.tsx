import React from 'react';
import { hobbies } from '../constants';
import SkillBadge from './SkillBadge';

const Hobbies: React.FC = () => {
  return (
    <section id="hobbies" className="py-20">
      <div className="container mx-auto px-6 sm:px-16">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">My Hobbies</h2>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          Here are some of the things I enjoy doing.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {hobbies.map((hobby, index) => (
            <SkillBadge key={index} name={hobby.name} icon={hobby.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;

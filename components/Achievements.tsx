import React from 'react';
import { achievements } from '../constants';
import { CheckBadgeIcon } from './Icons';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-200 dark:bg-tertiary">
      <div className="container mx-auto px-6 sm:px-16">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">My Achievements</h2>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          A collection of my accomplishments, certifications, and milestones throughout my journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col transform hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
              <img src={category.image} alt={category.category} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <CheckBadgeIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
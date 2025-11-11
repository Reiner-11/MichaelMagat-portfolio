import React from 'react';

interface SkillBadgeProps {
  name: string;
  // FIX: Use React.ReactElement to avoid issues with JSX namespace resolution.
  icon: React.ReactElement;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-200 dark:bg-tertiary rounded-lg shadow-md w-32 h-32 text-center transition-transform transform hover:scale-105">
      {icon}
      <span className="mt-2 text-sm font-medium">{name}</span>
    </div>
  );
};

export default SkillBadge;

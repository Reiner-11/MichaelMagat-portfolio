import React from 'react';

export interface NavLink {
  id: string;
  title: string;
}

export interface Skill {
  name: string;
  icon: React.ReactElement;
}

export interface Hobby {
  name: string;
  icon: React.ReactElement;
}

export interface Project {
  title: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link: string;
}

export interface AchievementCategory {
  category: string;
  items: string[];
  image: string;
}
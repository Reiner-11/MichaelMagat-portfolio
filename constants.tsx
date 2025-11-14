
import React from 'react';
import { NavLink, Skill, Project, AchievementCategory, Hobby } from './types';
import { 
  CodeBracketIcon, GlobeAltIcon, PaintBrushIcon, CommandLineIcon, ServerStackIcon, CircleStackIcon,
  MusicalNoteIcon, DeviceGamepadIcon, FastFoodIcon, SportsIcon, MicrophoneIcon, PencilIcon, FilmIcon, CameraIcon, BikeIcon, WalkIcon, BookOpenIcon, UserGroupIcon 
} from './components/Icons';

export const navLinks: NavLink[] = [
  { id: 'about', title: 'About' },
  { id: 'projects', title: 'Projects' },
  { id: 'achievements', title: 'Achievements' },
  { id: 'hobbies', title: 'Hobbies' },
  { id: 'cv', title: 'CV' },
  { id: 'contact', title: 'Contact' },
];

export const skills: Skill[] = [
  { name: 'React', icon: <CodeBracketIcon className="w-8 h-8 text-cyan-400" /> },
  { name: 'TypeScript', icon: <CodeBracketIcon className="w-8 h-8 text-blue-500" /> },
  { name: 'Tailwind CSS', icon: <PaintBrushIcon className="w-8 h-8 text-teal-400" /> },
  { name: 'Node.js', icon: <ServerStackIcon className="w-8 h-8 text-green-500" /> },
  { name: 'JavaScript', icon: <CodeBracketIcon className="w-8 h-8 text-yellow-400" /> },
  { name: 'HTML5 & CSS3', icon: <GlobeAltIcon className="w-8 h-8 text-orange-500" /> },
  { name: 'Python', icon: <CommandLineIcon className="w-8 h-8 text-blue-400" /> },
  { name: 'SQL', icon: <CircleStackIcon className="w-8 h-8 text-red-500" /> },
  { name: 'Csharp', icon: <CodeBracketIcon className="w-8 h-8 text-violet-500" /> },
  { name: 'Java', icon: <CodeBracketIcon className="w-8 h-8 text-red-500" /> },

];

export const projects: Project[] = [
  {
    title: 'Enrollment System',
    description: 'A comprehensive desktop application for managing student enrollments, course details, and records. Built with C# console app, it provides an efficient and user-friendly interface for academic administration.',
    tags: [
      { name: 'CSharp', color: 'blue-text-gradient' },
    ],
    image: new URL('./assets/project4.jpg', import.meta.url).href,
    source_code_link: ''
  },
  {
    title: 'Shoetopia',
    description: 'A high-fidelity UI/UX prototype for a modern shoe marketing application. Designed using Figma, it focuses on creating an engaging and intuitive shopping experience for sneaker enthusiasts.',
    tags: [
      { name: 'Figma', color: 'pink-text-gradient' },
      { name: 'UI/UX', color: 'green-text-gradient' },
    ],
    image: new URL('./assets/project3.jpg', import.meta.url).href,
    source_code_link: ''
  },
  {
      title: 'E-LIBRAMO',
    description: 'E-LIBRAMO is a digital library management system designed to provide students, teachers, and researchers with convenient access to academic resources anytime and anywhere. The system allows users to browse, borrow, and read e-books, journals, and research papers through an online platform. It also enables librarians to efficiently manage book inventories, track user activity, and organize digital collections.',
    tags: [
      { name: 'HTML', color: 'blue-text-gradient' },
      { name: 'PYTHON', color: 'green-text-gradient' },
      { name: 'JAVASCRIPT', color: 'pink-text-gradient' },
    ],
  image: new URL('./assets/project1.jpg', import.meta.url).href,
    source_code_link: 'https://github.com/NezraDev/E-LIBRAMO',
  },
  {
    title: 'We-Order',
    description: 'We-Order is a web and mobile-based application designed to simplify and enhance the fast-food ordering experience. The system allows customers to browse menus, customize their meals, and place orders conveniently from their devices. It also supports secure online payment options and provides real-time updates on order status and delivery',
    tags: [
      { name: 'HTML', color: 'blue-text-gradient' },
      { name: 'JAVA', color: 'green-text-gradient' },
      { name: 'Tailwind CSS', color: 'pink-text-gradient' },
      ],
  image: new URL('./assets/project2.jpg', import.meta.url).href,
    source_code_link: 'https://github.com/Reiner-11/we_order',
  },
];

export const achievements: AchievementCategory[] = [
  {
    category: 'Cosplay Competition',
    items: [
      'Best Literary Character (Grade 9 - Kiwi - 2018)',
      'Best Literary Character 3rd Runner Up (Grade 10 - Quirino - 2019)',
      'Best Literary Character 2nd Runner Up (Grade 12 - GAS - 2021)',
    ],
  image: new URL('./assets/achievement1.jpg', import.meta.url).href,
  },
  {
    category: 'Mr. & Ms. CCS Pageant Competition',
    items: [
      'Mr. CCS 2nd Runner Up (BSCS 2B - 2025)',
    ],
  image: new URL('./assets/achievement2.jpg', import.meta.url).href,
  },
  {
    category: 'Classical Guitar Solo Competition',
    items: [
      'Culture and Arts Competition Grand Champion (BSCS 3A - 2025)',
      'Culture and Arts Competition U-WIDE Inter-Campus 2nd Place (BSCS 3A - 2025)',
      'Performed as Classical guitarist at the annual university music festival.',
    ],
  image: new URL('./assets/achievement3.jpg', import.meta.url).href,
  },
];

export const hobbies: Hobby[] = [
  { name: 'Playing Guitar', icon: <MusicalNoteIcon className="w-8 h-8 text-red-500" /> },
  { name: 'Online Games', icon: <DeviceGamepadIcon className="w-8 h-8 text-indigo-500" /> },
  { name: 'Eating Out', icon: <FastFoodIcon className="w-8 h-8 text-yellow-600" /> },
  { name: 'Playing Sports', icon: <SportsIcon className="w-8 h-8 text-orange-500" /> },
  { name: 'Traveling', icon: <GlobeAltIcon className="w-8 h-8 text-cyan-500" /> },
  { name: 'Singing', icon: <MicrophoneIcon className="w-8 h-8 text-pink-500" /> },
  { name: 'Drawing', icon: <PencilIcon className="w-8 h-8 text-gray-500" /> },
  { name: 'Acting', icon: <FilmIcon className="w-8 h-8 text-purple-500" /> },
  { name: 'Modeling', icon: <CameraIcon className="w-8 h-8 text-teal-500" /> },
  { name: 'Biking', icon: <BikeIcon className="w-8 h-8 text-green-600" /> },
  { name: 'Walking', icon: <WalkIcon className="w-8 h-8 text-blue-400" /> },
  { name: 'Coding', icon: <CodeBracketIcon className="w-8 h-8 text-lime-500" /> },
  { name: 'Studying', icon: <BookOpenIcon className="w-8 h-8 text-amber-500" /> },
  { name: 'Reading Books', icon: <BookOpenIcon className="w-8 h-8 text-stone-500" /> },
  { name: 'Bonding with Friends', icon: <UserGroupIcon className="w-8 h-8 text-rose-500" /> },
];
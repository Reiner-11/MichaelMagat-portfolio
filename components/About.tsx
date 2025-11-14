
import React from 'react';
import { skills } from '../constants';
import SkillBadge from './SkillBadge';
import { CakeIcon, UserCircleIcon, MapPinIcon, EnvelopeIcon, PhoneIcon } from './Icons';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6 sm:px-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
              <img
                src={new URL('../assets/profile.jpg', import.meta.url).href}
                alt="Michael Reiner Magat"
                className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-blue-500 shadow-lg"
              />
          </div>
          <div className="md:w-2/3">
            <p className="text-lg leading-relaxed mb-6">
              I’m starting an exciting new chapter in web development, bringing with me a mix of experiences and perspectives. My experience as a database manager has provided me with a solid foundation in data, logic, and structure skills I'm now starting into creating intuitive and efficient web applications.
            </p>
            <p className="text-lg leading-relaxed">
              Beyond coding, I’m a creative person at heart. I love playing the guitar and designing websites, which has helped me develop a strong sense of style and an eye for detail. I’m passionate about creating user experiences that look great and feel natural. I’m also a junior hardware technician with a background in security and networking, giving me a well-rounded understanding of technology from how it looks to how it works behind the scenes.           
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-lg">
              <div className="flex items-center gap-3">
                <CakeIcon className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <span><strong>Birthday:</strong> September 09, 2002</span>
              </div>
              <div className="flex items-center gap-3">
                <UserCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <span><strong>Age:</strong> 23</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPinIcon className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <span><strong>Birthplace:</strong> Calamba Medical Center, Calamba</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <span><strong>Email:</strong> <a href="mailto:magatmichael52@gmail.com" className="hover:underline">magatmichael52@gmail.com</a></span>
              </div>
              <div className="flex items-center gap-3 col-span-1 sm:col-span-2">
                <PhoneIcon className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <span><strong>Contact:</strong> <a href="Phone" className="hover:underline">09858255003</a></span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">My Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <SkillBadge key={index} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

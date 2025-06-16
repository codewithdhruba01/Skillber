import React from 'react';
import SkillCard from '../components/SkillCard';
import { skills } from '../data/skills';

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          My Skills
        </h1>
        <p className="text-gray-400 text-center mb-12 text-lg">
          Expertise and technologies I work with
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
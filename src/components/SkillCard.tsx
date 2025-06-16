import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  id: number;
  name: string;
  icon: string;
  level: number;
  color: string;
}

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
    >
      <div className="flex items-center gap-4 mb-4">
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${skill.color}`}
        >
          <i className={skill.icon}></i>
        </div>
        <h3 className="text-xl font-semibold">{skill.name}</h3>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full ${skill.color}`}
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
      <p className="text-gray-400 mt-2">{skill.level}% Proficiency</p>
    </motion.div>
  );
};

export default SkillCard;
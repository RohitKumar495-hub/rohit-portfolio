import React from 'react';
import SkillCircle from './SkillCircle';

const skills = [
  { skill: "MongoDb", percentage: 85 },
  { skill: "Express.js", percentage: 80 },
  { skill: "React", percentage: 95 },
  { skill: "Node JS", percentage: 80 },
  { skill: "Next JS", percentage: 90 },
  { skill: "HTML5", percentage: 95 },
  { skill: "CSS3", percentage: 95 },
  { skill: "JavaScript", percentage: 85 },
  { skill: "Redux JS", percentage: 75 },
  { skill: "REST", percentage: 80 },
  { skill: "FIGMA", percentage: 80 },
  { skill: "Tailwind CSS", percentage: 90 },
  { skill: "BootStrap", percentage: 95 },
  { skill: "GIT/GITHUB", percentage: 85 },


];

const SkillsSection: React.FC = () => {
  return (
    <div className="grid">
      <h2 className="text-3xl font-bold mb-8 text-center">MY SKILLS</h2>
      <div className="grid lg:grid-cols-4 grid-cols-2">
        {skills.map((item, idx) => (
          <SkillCircle key={idx} skill={item.skill} percentage={item.percentage} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;

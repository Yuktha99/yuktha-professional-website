import React from "react";

const SkillCard = ({ header, skillsList, animationImage }) => {
  return (
    <div className="skills-card">
      <div className="skills-card-body">
        <div className="skills-title-and-content-container">
          {header && <div className="skills-card-title">{header}</div>}
          <div className="card-skills-container">
            {skillsList.map((skill, index) => (
              <div key={index} className="card-skill">
                <img src={skill?.image} alt={skill?.name} />
                <div>{skill?.name}</div>
              </div>
            ))}
          </div>
        </div>
        {animationImage && <img src={animationImage} alt="frontend" className="animation-image" />}
      </div>
    </div>
  );
};

export default SkillCard;

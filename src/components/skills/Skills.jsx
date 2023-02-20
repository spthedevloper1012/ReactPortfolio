import React from 'react'
import "./Skills.css";
import Frontend from './Frontend';
import Barskills from './Barskills';

const Skills = () => {
  return (
    <section className="skills section" id='skills'>
      <h2 className="section__title"> Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <Frontend/>

        <Barskills/>
      </div>
    </section>
  )
}

export default Skills;

    
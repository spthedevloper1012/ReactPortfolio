import React from 'react'
import { skills } from '../../Skilldata'
import "./Skills.css"

const Barskills = () => {
  return (
    <div className="skills__content">
      <h3 className="mainBarskills__title">Backend developer</h3>
    <div className="barskills__container container grid">
        {skills.map(({ name, percentage }, index) => {
            return (
                <div className="skills__item">
                    <div className="barskills__title">
                        <h3 className="barskills__name"><i className='bx bx-badge-check'></i> {name} </h3>
                        <span className="barskills__number">
                            {percentage} <span>%</span>
                        </span>
                    </div>

                    <div className="barskills__bar">
                        <span className="barskills__percentage" style={{width: `${percentage}%`}}>
                        <span></span>
                        </span>
                    </div>
                </div>
            )
        })}
        </div>
      </div>
  )
}

export default Barskills

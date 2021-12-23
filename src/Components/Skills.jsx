import React from 'react';
import { useState } from 'react'

export default function Skills() {
    const [Skills, setSkills] = useState([
        { name: 'HTML', progress: '95', color: 'success' },
        { name: 'CSS', progress: '90', color: 'info' },
        { name: 'BOOTSTRAP 5', progress: '90', color: 'primary' },
        { name: 'JAVASCRIPT', progress: '90', color: 'warning' },
        { name: 'FIREBASE', progress: '90', color: 'danger' },
        { name: 'REACT JS', progress: '85', color: 'success' },
        { name: 'MATERIAL UI', progress: '85', color: 'primary' },
    ])
    return (
        <div className="mt-5">
            <h4>Skill</h4>
            <hr />
            {Skills.map((item, index) => {
                return <div key={index} className="progress">
                    <div className={`progress-bar bg-${item.color} w-${item.progress}`} role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                        <span className="skill">{item.name}</span>
                        <i className="val">{`${item.progress}%`}</i>
                    </div>
                </div>
            })}
        </div>
    )
}

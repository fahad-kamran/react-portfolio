import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';

export default function Experience() {
    const data = [
        { value: '450', title: 'WORKS COMPLETED', icon: 'fas fa-check' },
        { value: '25', title: 'YEARS OF EXPERIENCE', icon: 'fas fa-journal-whills' },
        { value: '550', title: 'TOTAL CLIENTS', icon: 'fas fa-user-friends' },
        { value: '48', title: 'AWARD WON', icon: 'fas fa-award' },
    ]
    return (
        <div className='bg-image center-flex py-5' id='experience'>
            <div className="container-lg py-5 z-0">
                <div className="row">
                    {data.map((item, index) => {
                        return <div key={index} className="col-6 col-md-3 mb-3 mb-md-0">
                            <div className="counter-box py-5">
                                <div className="icon-box center-flex">
                                    <i className={item.icon}></i>
                                </div>
                                <VisibilitySensor>
                                    {({ isVisible }) => (
                                        <h3>{isVisible ? <CountUp start={0} duration={3} end={item.value} /> : ''}<span className='opacity-0'>.</span></h3>
                                    )}
                                </VisibilitySensor>
                                <p className='mb-0'>{item.title}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

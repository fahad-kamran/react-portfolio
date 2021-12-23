import React from 'react';
import User from '../assets/images/about.jpg';
import AboutText from './AboutText';
import Skills from './Skills';

export default function About() {
    return (
        <div className='about-me pt-5 bg-light'>
            <div className="container-lg bg-white p-5">
                <div className="row">
                    <div className="col-md-6 mb-3 mb-md-0">
                        <div className="row">
                            <div className="col-12 col-sm-4 mb-3">
                                <img src={User} alt="user" className='rounded img-fluid' />
                            </div>
                            <div className="col-12 col-sm-8 ps-0 ps-sm-5">
                                <p><strong>Name:</strong> Morgan Freeman</p>
                                <p><strong>Profile:</strong> full stack developer</p>
                                <p><strong>Email:</strong> contact@example.com</p>
                                <p><strong>Phone:</strong> (617) 557-0089</p>
                            </div>
                        </div>
                        <Skills />
                    </div>
                    <AboutText />
                </div>
            </div>
        </div>
    )
}

import React from 'react';
import SectionHeader from './SectionHeader';
import Servicescategory from './Services-category';
export default function Services() {
    return (
        <div className='bg-light'>
            <div className="container-lg text-center">
                <SectionHeader name="SERVICES" para="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                <Servicescategory />
            </div>
        </div>
    )
}

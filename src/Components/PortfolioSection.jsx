import React from 'react';
import SectionHeader from './SectionHeader';
import PortfolioItems from './PortfolioItems';

export default function PortfolioSection() {
    return (
        <div className='bg-light'>
            <div className="container-lg">
                <SectionHeader name='PORTFOLIO' para='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />
                <PortfolioItems />
            </div>
        </div>
    )
}

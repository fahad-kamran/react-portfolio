import React from 'react';
import ChangePageTitle from '../Components/ChangePageTitle';
import { useParams } from 'react-router-dom';
import Work1 from '../assets/images/work/work-1.jpg';
import Work2 from '../assets/images/work/work-2.jpg';
import Work3 from '../assets/images/work/work-3.jpg';
import Work4 from '../assets/images/work/work-4.jpg';
import Work5 from '../assets/images/work/work-5.jpg';
import Work6 from '../assets/images/work/work-6.jpg';

export default function Projectdetailed() {
    const { id } = useParams();
    const project = [
        { id: '1', front_image: Work1, name: 'Lorem impsum dolor', type: 'Web Design', date: '18 Sep. 2018' },
        { id: '2', front_image: Work2, name: 'Loreda Cuno Nere', type: 'Web Design', date: '18 Sep. 2018' },
        { id: '3', front_image: Work3, name: 'Mavrito Lana Dere', type: 'Web Design', date: '18 Sep. 2018' },
        { id: '4', front_image: Work4, name: 'Bindo Laro Cado', type: 'Web Design', date: '18 Sep. 2018' },
        { id: '5', front_image: Work5, name: 'Studio Lena Mado', type: 'Web Design', date: '18 Sep. 2018' },
        { id: '6', front_image: Work6, name: 'Studio Big Bang', type: 'Web Design', date: '18 Sep. 2018' },
    ];
    return (
        <div>
            <h1>Projectdetailed {id}</h1>



            <ChangePageTitle pageTitle="Project Detailed" />
        </div>
    )
}

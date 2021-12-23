import React from 'react'

export default function Servicescategory() {
    const services = [
        { name: 'WEB DESIGN', discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.', icon: 'fas fa-briefcase' },
        { name: 'WEB DEVELOPMENT', discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.', icon: 'far fa-list-alt' },
        { name: 'PHOTOGRAPHY', discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.', icon: 'fas fa-chart-bar' },
        { name: 'RESPONSIVE DESIGN', discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.', icon: 'fas fa-binoculars' },
        { name: 'GRAPHIC DESIGN', discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.', icon: 'far fa-sun' },
        { name: 'MARKETING SERVICES', discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.', icon: 'fas fa-calendar-week' },
    ]
    return (
        <div className='row'>
            {services.map((item, index) => {
                return <div key={index} className="col-md-4">
                    <div className="services-box">
                        <div className="ico-circles mb-3">
                            <i className={item.icon}></i>
                        </div>
                        <h2 className='s-title'>{item.name}</h2>
                        <p className='s-discription mb-0'>{item.discription}</p>
                    </div>
                </div>
            })}
        </div>
    )
}

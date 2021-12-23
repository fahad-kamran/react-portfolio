import React from 'react';
import T1 from '../assets/images/testimonials/testimonials-1.jpg';
import T2 from '../assets/images/testimonials/testimonials-2.jpg';
import T3 from '../assets/images/testimonials/testimonials-3.jpg';
import T4 from '../assets/images/testimonials/testimonials-4.jpg';
import T5 from '../assets/images/testimonials/testimonials-5.jpg';

export default function Carousel() {
    const Testimonials_Data = [
        { id: 1, name: 'Walter White', discription: 'Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.', image: T1, },
        { id: 2, name: 'Sarah Jhonson', discription: 'Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.', image: T2, },
        { id: 3, name: 'William Anderson', discription: 'Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.', image: T3, },
        { id: 4, name: 'Amanda Jepson', discription: 'Rerum voluptate non adipisci animi distinctio et deserunt amet voluptas. Quia aut aliquid doloremque ut possimus ipsum officia.', image: T4, }
    ]
    return (
        <div className="section-carousel bg-image py-5">
            <div className="container-lg py-5">
                <div id="carouselExampleIndicators" className="carousel slide z-1 col-11 mx-auto" data-bs-ride="carousel">
                    <div className="carousel-inner text-center mb-3">
                        {Testimonials_Data.map((v, i) => {
                            return <div key={i} className={`carousel-item ${i === 0 ? 'active' : null}`}>
                                <img src={v.image} className="rounded-circle testi-img" alt="testimonial" />
                                <span className='testi-author'>{v.name}</span>
                                <p>{v.discription}</p>
                            </div>
                        })}
                    </div>
                    <div className="carousel-indicators position-relative">
                        {Testimonials_Data.map((v, i) => {
                            return <button key={i} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={i} className={`carousel-btn ${i === 0 ? 'active' : null}`} aria-current="true" aria-label={`Slide ${v.id}`} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

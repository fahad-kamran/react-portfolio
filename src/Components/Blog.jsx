import React from 'react';
import SectionHeader from './SectionHeader';
import Post1 from '../assets/images/Post/post-1.jpg';
import Post2 from '../assets/images/Post/post-2.jpg';
import Post3 from '../assets/images/Post/post-3.jpg';

export default function Blog() {
    const data = [
        { image: Post1, type: 'TRAVEL', name: 'See more ideas about Travel', discription: 'Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.' },
        { image: Post2, type: 'WEB DESIGN', name: 'See more ideas about Travel', discription: 'Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.' },
        { image: Post3, type: 'WEB DESIGN', name: 'See more ideas about Travel', discription: 'Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.' }
    ]
    return (
        <div className='bg-light'>
            <div className="container-lg">
                <SectionHeader name='BLOG' para='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />
                <div className="row">
                    {
                        data.map(
                            (item, index) => {
                                return <div key={index} className="col-md-4 mb-5">
                                    <div className="card blog-card">
                                        <img src={item.image} alt={`Post${index}`} className='img-fluid' />
                                        <div className="card-body">
                                            <h4 className='pt-3'>{item.name}</h4>
                                            <p className='text-justify mb-0'>{item.discription}</p>
                                            <div className="blog-type">
                                                <div>
                                                    <h6 className='mb-0'>{item.type}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        )
                    }
                </div>
            </div>
        </div>
    )
}

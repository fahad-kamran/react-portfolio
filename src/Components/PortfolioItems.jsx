import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Work1 from '../assets/images/work/work-1.jpg';
import Work2 from '../assets/images/work/work-2.jpg';
import Work3 from '../assets/images/work/work-3.jpg';
import Work4 from '../assets/images/work/work-4.jpg';
import Work5 from '../assets/images/work/work-5.jpg';
import Work6 from '../assets/images/work/work-6.jpg';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    }),
);
export default function PortfolioItems() {
    const classes = useStyles();
    const [glightBox, setglightBox] = useState(false);

    const project = [
        { id: '1', front_image: Work1, name: 'Lorem impsum dolor', type: 'Web Design', date: '18 Sep. 2018' },
        { id: '2', front_image: Work2, name: 'Loreda Cuno Nere', type: 'Web Design', date: '18 Sep. 2018' },
        { id: '3', front_image: Work3, name: 'Mavrito Lana Dere', type: 'Web Design', date: '18 Sep. 2018' },
        { id: '4', front_image: Work4, name: 'Bindo Laro Cado', type: 'Web Design', date: '18 Sep. 2018' },
        { id: '5', front_image: Work5, name: 'Studio Lena Mado', type: 'Web Design', date: '18 Sep. 2018' },
        { id: '6', front_image: Work6, name: 'Studio Big Bang', type: 'Web Design', date: '18 Sep. 2018' },
    ];

    const Carousel_set = async (index) => {
        await setglightBox(true);
        document.getElementsByClassName('carousel-item')[index].classList.add('active');
    }
    const carousel_close = () => {
        setglightBox(false)
    }
    return (
        <>
            <div className="row">
                {project.map((item, index) => {
                    return <div key={index} className="col-md-4 mb-5">
                        <div className="card glightbox">
                            <div role="button" onClick={() => Carousel_set(index)} className="work-image">
                                <img src={item.front_image} alt={item.name} className='img-fluid' />
                            </div>
                            <div className="project-body">
                                <div className="row">
                                    <div className="col-9">
                                        <h2 className='w-title'>{item.name}</h2>
                                        <div className="w-more">
                                            <span className="w-ctegory">{item.type}</span> / <span className="w-date">{item.date}</span>
                                        </div>
                                    </div>
                                    <div className="col-3 w-like">
                                        <Link to={`/project-detail/:${item.id}}`}><i className="fas fa-plus-circle"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            <div>
                {
                    glightBox
                        ?
                        <Backdrop className={classes.backdrop} open={true}>
                            <div id="carouselExampleControls" className="carousel slide col-11 col-md-8 bg-dark" data-bs-ride="carousel" data-bs-interval="false">
                                <i role="button" className="fas fa-times carousel_close" onClick={() => carousel_close()}></i>
                                <div className="carousel-inner">
                                    {project.map((v, i) => {
                                        return <div key={i} className="carousel-item">
                                            <img src={v.front_image} className="img-fluid" alt="image" />
                                        </div>
                                    })}
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </Backdrop>
                        :
                        null
                }

            </div>
        </>
    )
}

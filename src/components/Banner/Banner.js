import { useEffect, useState } from 'react';
import * as GlassesService from '../Services/GlassesService'
import { Glasses } from './Glasses/Glasses';
import './style.css';

export const Banner = () => {
    const [glasses, setGlasses] = useState([]);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        GlassesService.getAll()
            .then(glasses => {
                setGlasses(glasses);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const nextClickHandler = (e) => {
        // e.preventDefult();

        if (index !== glasses.length - 1) {
            setIndex(state => state + 1);
        } else {
            setIndex(0);
        };
    };
    const prevClickHandler = (e) => {
        if (index <= 0) {
            setIndex(glasses.length);
        };
        setIndex(state => state - 1);
    };
    return (
        <section className="banner_main">
            <div id="banner1" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#banner1" data-slide-to="0" className="active"></li>
                    <li data-target="#banner1" data-slide-to="1"></li>
                    <li data-target="#banner1" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">

                    <Glasses glasses={glasses[index]} />

                </div>
                <div className="carousel-control-prev" role="button" data-slide="prev" onClick={prevClickHandler}>
                    <i className="fa fa-arrow-left" aria-hidden="true" ></i>
                </div>
                <div className="carousel-control-next" role="button" data-slide="next" onClick={nextClickHandler}>
                    <i className="fa fa-arrow-right" aria-hidden="true" ></i>
                </div>
            </div>
        </section>
    )
}
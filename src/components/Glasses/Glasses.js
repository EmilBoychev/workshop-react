import './Glasses.css';
import { One } from './One/One';
import * as GlassesService from '../Services/GlassesService';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Glasses = () => {
    const navigate = useNavigate();
    const [glasses, setGlasses] = useState([]);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(4);
    useEffect(() => {
        GlassesService.getAll()
            .then(curGlasses => {
                let glass = curGlasses.slice(start, end);
                const result = glasses.concat(glass)
                setGlasses(result);
            })
            .catch(err => {
                console.log(err);
            });
    }, [start, end]);

    const showMore = () => {
        setStart(() => Number(start) + 4);
        setEnd(() => Number(end) + 4);
    };

    const clickDetailsHandler = (glassesId) => {
        navigate(`/details/${glassesId}`);
    }

    return (
        <div className="glasses">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <div className="titlepage">
                            <h2 className='text-h'>Our Glasses</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor
                                e et dolore magna aliqua. Ut enim ad minim veniam, qui
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">

                    {glasses.map(glasses => <One key={glasses._id} glassesData={glasses} clickDetails={clickDetailsHandler} />)}


                    <div className="col-md-12">
                        <button className='read_more' onClick={showMore} >Read more</button>
                    </div>
                </div>
            </div>
        </div>
    )
} 
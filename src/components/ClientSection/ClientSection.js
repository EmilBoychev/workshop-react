import './ClientSection.css';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { CartGlasses } from '../Contexts/GlassesContext';
import { useNavigate } from 'react-router-dom';
import { Cart } from './Cart/Cart';

export const ClientSection = () => {
    const { auth } = useContext(AuthContext);
    const { cart, delFromCart } = useContext(CartGlasses);
    const navigata = useNavigate()
    if (!auth.email) {
        navigata('/login')
    };
    const del = (glass) => {
        delFromCart(glass)
    }

    return (
        <div className="clients">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="titlepage">
                            {cart.length === 0
                                ? <h2 className='text-title'>Empty cart </h2>
                                : <>
                                    <h2>Your cart</h2>
                                    <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la</p>
                                </>
                            }

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div id="myCarousel" className="carousel slide clients_Carousel " data-ride="carousel">
                            <div className="carousel-inner">
                                {cart.map(x => <Cart key={x._id} glass={x} del={del} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
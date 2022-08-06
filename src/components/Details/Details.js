import './style.css';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Choice } from '../Alerts/Choice';
import * as GlassesService from '../Services/GlassesService'
import { AdminContext } from '../Contexts/AdminContext';
import { AuthContext } from '../Contexts/AuthContext';
import { OneGlasses, CartGlasses } from '../Contexts/GlassesContext';
import { Comment } from './Coments/Coment';
import uniqId from 'uniqid';
// import * as commentService from '../Services/CommentService'

export const Details = () => {
    const { admin } = useContext(AdminContext);
    const { auth } = useContext(AuthContext);
    const { oneGlasses } = useContext(OneGlasses);
    const { addToCart } = useContext(CartGlasses);
    const { glassesId } = useParams();
    const [glasses, setGlasses] = useState({});
    const [deleteHandler, setDeleteHandler] = useState(false);
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        GlassesService.getOne(glassesId)
            .then(res => {
                setGlasses(res);
                oneGlasses(res);
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
            })
    }, [glassesId]);

    if (loading) {
        return <h3>Loading</h3>
    }

    const deleteGlasses = () => {
        setDeleteHandler(true);
        choiceHandler();
        if (!admin.email) {
            return navigate('/404');
        }
        if (deleteHandler) {
            GlassesService.deleteGlasses(glasses._id)
                .then(res => {
                    navigate('/glasses');
                })
                .catch(err => {
                    console.log(err);
                });
        };
    };
    const choiceHandler = (choice) => {
        if (choice) {
            setDeleteHandler(false)
        };
    };
    const addCommentHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const currentComment = formData.get('comment');
        if (currentComment.length < 3) {
            return console.log('more characters');
        };
        let glassesComment = glasses.comment || [];
        glassesComment.push({ comment: currentComment, ownerEmail: auth.email, _id: uniqId() });
        GlassesService.updata(glassesId, { ...glasses, comment: glassesComment })
            .then(res => {
                setGlasses(res);
                e.target.reset()
            })
            .catch(err => {
                console.log(err.message);
            });
    };

    const addGlassesToCart = () => {
        addToCart(glasses);

    }


    return (
        <div id="about" className="shop">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5">
                        {loading}
                        <div className="shop_img">
                            <figure><img src={glasses.imgUrl} alt="#" /></figure>
                        </div>

                        {glasses.comment && glasses.comment.map(x => <Comment key={x._id} comment={x} />)}

                        {!admin.email && auth.email &&
                            <form id='comment' className='comment-form' onSubmit={addCommentHandler} >
                                <div>
                                    <input className='comment' type="text" name="comment" defaultValue="" placeholder='Add commment...' />
                                </div>
                                <button className='add-comment '>Add comment</button>
                            </form>
                        }

                    </div>
                    <div className="max_width">
                        <div className="col-md-7 padding_right0">
                            <div className="titlepage">
                                <h2>{glasses.name}</h2>
                                <p>{glasses.description}</p>

                                {!admin.email && auth.email && <button className='read_more' onClick={addGlassesToCart} > Buy it now</button>}
                                {admin.email &&
                                    <>
                                        <NavLink className="read_more" to={`/glasses/${glasses._id}/edit`}>Edit</NavLink>
                                        <div className="read_more" onClick={() => deleteGlasses()}  >Delete</div>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                    {deleteHandler &&
                        <div>
                            <Choice onCloseBtn={choiceHandler} deleteGlasses={deleteGlasses} />
                        </div>}
                </div>
            </div>
        </div>
    )
}
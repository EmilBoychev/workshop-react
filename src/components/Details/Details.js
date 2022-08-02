import { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Choice } from '../Alerts/Choice';
import * as GlassesService from '../Services/GlassesService'
import './style.css';
import { AdminContext } from '../Contexts/AdminContext';
import { AuthContext } from '../Contexts/AuthContext';
import { Comment } from './Coments/Coment';
// import * as commentService from '../Services/CommentService'

export const Details = () => {
    const { admin } = useContext(AdminContext);
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();
    const { glassesId } = useParams();
    const [glasses, setGlasses] = useState({});
    const [deleteHandler, setDeleteHandler] = useState(false);
    // const [comment, setComment]

    useEffect(() => {
        GlassesService.getOne(glassesId)
            .then(res => {
                setGlasses(res);
            })
            .catch(err => {
                console.log(err);
            })
    }, [glassesId]);

    // useEffect(() => {
    //     commentService.getAll()
    //         .then(res => {
    //             console.log(res);
    //         })
    // }, [])

    const deleteGlasses = () => {
        setDeleteHandler(true);
        choiceHandler();
        if (deleteHandler) {
            GlassesService.deleteGlasses(glasses._id)
                .then(res => {
                    navigate('/glasses');
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
    const choiceHandler = (choice) => {
        if (choice) {
            setDeleteHandler(false)
        }
    };
    const addCommentHandler = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target);
        const currentComment = formData.get('comment');
        if (currentComment.length < 3) {
            return console.log('more characters');
        }
        let glassesComment = glasses.comment || [];
        glassesComment.push({ comment: currentComment, ownerEmail: auth.email });
        GlassesService.updata(glassesId, { ...glasses, comment: glassesComment })
            .then(res => {
                setGlasses(res)
                console.log(res);
            })
            .catch(err => {
                console.log(err.message);
            });
    };

    return (
        <div id="about" className="shop">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5">
                        <div className="shop_img">
                            <figure><img src={glasses.imgUrl} alt="#" /></figure>
                        </div>

                        {glasses.comment && glasses.comment.map(x => <Comment key={x._id} comment={x} />)}

                        {!admin &&
                            <form id='comment' className='comment-form' onSubmit={addCommentHandler} >
                                <div>
                                    <input className='comment' type="text" name="comment" defaultValue="" placeholder='Add commment...' />
                                </div>
                                <button className='add-comment '>Add comment</button>
                            </form>
                        }

                    </div>
                    <div className="col-md-7 padding_right0">
                        <div className="max_width">
                            <div className="titlepage">
                                <h2>{glasses.name}</h2>
                                <p>{glasses.description}</p>
                                <NavLink className="read_more" to="#">Buy now</NavLink>
                                {admin &&
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
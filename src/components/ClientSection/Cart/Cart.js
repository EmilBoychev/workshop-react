export const Cart = ({
    glass,
    del
}) => {
    return (
        <div className="carousel-item active">
            <div className="container">
                <div className="carousel-caption ">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="clients_box">
                                <figure><img src={glass.imgUrl} alt="#" /></figure>
                                <h3>{glass.name}</h3>
                                <p>{glass.description}</p>
                                <button className="del" onClick={() => del(glass)} >Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const One = ({
    name,
    imgUrl,
    description,
    price,
}) => {
    return (
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="glasses_box">
                <figure><img src={imgUrl} alt="#" /></figure>
                <h3><span className="blu">$</span>{price}</h3>
                <p>{name}</p>
            </div>
        </div>
    )
}
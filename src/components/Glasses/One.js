export const One = ({ glassesData }) => {
    return (
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="glasses_box">
                <figure><img src={glassesData.imgUrl} alt="#" /></figure>
                <h3><span className="blu">$</span>{glassesData.price}</h3>
                <p>{glassesData.name}</p>
            </div>
        </div>
    )
}
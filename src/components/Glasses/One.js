
export const One = ({ glassesData, clickDetails }) => {


    return (

        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" onClick={() => clickDetails(glassesData._id)} >
            <div className="glasses_box">
                <figure className="img-one" ><img src={glassesData.imgUrl} alt="#" /></figure>
                <h3>{glassesData.name}</h3>
                <p><span className="blu">$</span>{glassesData.price}</p>
            </div>
        </div>


    )
}
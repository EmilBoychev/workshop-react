
export const Create = () => {
    return (
        <div id="contact" className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form id="request" className="main_form">
                            <div className="row">
                                <div className="col-md-12 ">
                                    <h3>Add glasses </h3>
                                </div>
                                <div className="col-md-12 ">
                                    <input className="contactus" placeholder="Name" type="type" name="Name" />
                                </div>
                                <div className="col-md-12">
                                    <input className="contactus" placeholder="Image URL" type="type" name="imageUrl" />
                                </div>
                                <div className="col-md-12">
                                    <input className="contactus" placeholder="Description" type="type" name="description" />
                                </div>
                                <div className="col-md-12">
                                    <input className="contactusmess" placeholder="Price" type="type" message="price" />
                                </div>
                                <div className="col-md-12">
                                    <button className="send_btn">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="map_section">
                    <div id="map">
                    </div>
                </div>
            </div>
        </div>
    )
}
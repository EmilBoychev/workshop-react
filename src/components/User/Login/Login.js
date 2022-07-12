
export const Login = () => {
    return (
        <div id="contact" className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form id="request" className="main_form">
                            <div className="row">
                                <div className="col-md-12 ">
                                    <h3>Login</h3>
                                </div>
                                <div className="col-md-12">
                                    <input className="contactus" placeholder="User name" type="type" name="userName" />
                                </div>
                                <div className="col-md-12">
                                    <input className="contactus" placeholder="Password" type="type" name="password" />
                                </div>
                                <div className="col-md-12">
                                    <button className="send_btn">Login</button>
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
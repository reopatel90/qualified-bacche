const Joinnow = () => {

    return <>
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                <form>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                <label for="name">Your Name</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                <label for="email">Your Email</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="email" placeholder="Your Email" />
                                <label for="email">Batch</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="email" placeholder="Your Email" />
                                <label for="email">Course</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="email" placeholder="Your Email" />
                                <label for="email">College Name</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="number" className="form-control" id="email" placeholder="Your Email" />
                                <label for="email">Passout Year</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <input type="number" minLength={10} maxLength={10} className="form-control" id="subject" placeholder="Subject" />
                                <label for="subject">Phone Number</label>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: "150px" }}></textarea>
                                <label for="message">Message</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default Joinnow;
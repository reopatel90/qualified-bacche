const Joinnow = () => {

    return <>
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                <form>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="joinName" placeholder="Your Name" />
                                <label htmlFor="joinName">Your Name</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="email" className="form-control" id="joinEmail" placeholder="Your Email" />
                                <label htmlFor="joinEmail">Your Email</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="joinBatch" placeholder="Batch" />
                                <label htmlFor="joinBatch">Batch</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="joinCourse" placeholder="Course" />
                                <label htmlFor="joinCourse">Course</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="joinCollege" placeholder="College Name" />
                                <label htmlFor="joinCollege">College Name</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="number" className="form-control" id="joinPassout" placeholder="Passout Year" />
                                <label htmlFor="joinPassout">Passout Year</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <input type="tel" pattern="[0-9]{10}" maxLength={10} className="form-control" id="joinPhone" placeholder="Phone Number" />
                                <label htmlFor="joinPhone">Phone Number</label>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a message here" id="joinMessage" style={{ height: "150px" }}></textarea>
                                <label htmlFor="joinMessage">Message</label>
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
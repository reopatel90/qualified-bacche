const About = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: "400px" }}>
                        <div className="position-relative h-100">
                            <img className="img-fluid position-absolute w-100 h-100" src="img/about.jpg" alt="About Qualified Bacche" style={{ objectFit: "cover" }} />
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                        <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                        <h1 className="mb-4">Welcome to Qualified Bacche</h1>
                        <p className="mb-4">
                            Qualified Bacche is a premier e-learning platform dedicated to empowering students and professionals with industry-relevant skills. We offer a wide range of courses in technology, programming, data analytics, and English communication — all designed to make learners job-ready.
                        </p>
                        <p className="mb-4">
                            Based at B-HUB, BSFC, Fraser Road, Patna (Bihar), we combine live mentorship, real-world projects, and certification programmes to deliver a holistic learning experience. Our mission is to bridge the gap between education and employment for the youth of India.
                        </p>
                        <div className="row gy-2 gx-4 mb-4">
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Industry-Relevant Curriculum</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Live Mentor Support</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Certificate &amp; LOR on Completion</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Internship Opportunities</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Affordable Fees</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Flexible Online Classes</p>
                            </div>
                        </div>
                        <a className="btn btn-primary py-3 px-5 mt-2" href="/contact">Get In Touch</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
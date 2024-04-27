import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Courses = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        // slidesToShow: 3,
        // slidesToScroll: 1,
        className: "center",
        centerMode: false,
        infinite: true,
        centerPadding: "60px",
        swipeToSlide: true,
        afterChange: function(index) {
            console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "grey" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "grey" }}
            onClick={onClick}
          />
        );
      }
    return <>

        <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 class="section-title bg-white text-center text-primary px-3">Courses</h6>
                    <h1 class="mb-5">Popular Tech Course</h1>
                </div>
                
                <div class="row g-4 justify-content-center">
                <Slider {...settings}>
                    <div class="col-lg-4 col-md-6  wow fadeInUp" data-wow-delay="0.1s">
                        <div class="course-item bg-light">
                            <div class="position-relative overflow-hidden">
                                <img class="img-fluid" src="img/Web.jpg" alt="" />
                                <div class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                    <a href="https://forms.gle/aEVrocmPGtuEYXW56" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                                    <a href="/CR" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Join Now</a>
                                </div>
                            </div>
                            <div class="text-center p-4  ">
                                <h3 class="mb-0">Full Stack Development</h3>
                                <div class="mb-3">
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    {/* <small class="fa fa-star text-primary"></small> */}
                                    <small>(4.6)</small>
                                </div>

                                <h5 class="mb-4">₹1699.00</h5>
                            </div>

                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="course-item bg-light">
                            <div class="position-relative overflow-hidden">
                                <img class="img-fluid" src="img/webdev.jpg" alt="" />
                                <div class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                    <a href="https://forms.gle/aEVrocmPGtuEYXW56" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                                    <a href="/CR" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Join Now</a>
                                </div>
                            </div>
                            <div class="text-center p-4 ">
                                <h3 class="mb-0"> Web Development</h3>
                                <div class="mb-3">
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small>(123)</small>
                                </div>
                                <h5 class="mb-4">₹699.00</h5>
                            </div>

                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="course-item bg-light">
                            <div class="position-relative overflow-hidden">
                                <img class="img-fluid" src="img/Python.jpg" alt="" />
                                <div class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                    <a href="https://forms.gle/aEVrocmPGtuEYXW56" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                                    <a href="/CR" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Join Now</a>
                                </div>
                            </div>
                            <div class="text-center p-4 ">
                                <h3 class="mb-0">Python Programming</h3>
                                <div class="mb-3">
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small>(123)</small>
                                </div>
                                <h5 class="mb-4">₹599.00</h5>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="course-item bg-light">
                            <div class="position-relative overflow-hidden">
                                <img class="img-fluid" src="img/JAVA.jpg" alt="" />
                                <div class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                    <a href="https://forms.gle/aEVrocmPGtuEYXW56" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                                    <a href="/CR" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Join Now</a>
                                </div>
                            </div>
                            <div class="text-center p-4 ">
                                <h3 class="mb-0">Java Programming</h3>
                                <div class="mb-3">
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small>(123)</small>
                                </div>
                                <h5 class="mb-4">₹799.00</h5>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="course-item bg-light">
                            <div class="position-relative overflow-hidden">
                                <img class="img-fluid" src="img/c.jpg" alt="" />
                                <div class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                    <a href="https://forms.gle/aEVrocmPGtuEYXW56" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                                    <a href="/CR" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Join Now</a>
                                </div>
                            </div>
                            <div class="text-center p-4 ">
                                <h3 class="mb-0">C Programming</h3>
                                <div class="mb-3">
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small>(123)</small>
                                </div>
                                <h5 class="mb-4">₹799.00</h5>
                            </div>

                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="course-item bg-light">
                            <div class="position-relative overflow-hidden">
                                <img class="img-fluid" src="img/c++.jpg" alt="" />
                                <div class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                    <a href="https://forms.gle/aEVrocmPGtuEYXW56" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                                    <a href="/CR" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Join Now</a>
                                </div>
                            </div>
                            <div class="text-center p-4 ">
                                <h3 class="mb-0">C++ Programming</h3>
                                <div class="mb-3">
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small>(123)</small>
                                </div>
                                <h5 class="mb-4">₹799.00</h5>
                            </div>

                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="course-item bg-light">
                            <div class="position-relative overflow-hidden">
                                <img class="img-fluid" src="img/SQL.jpg" alt="" />
                                <div class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                    <a href="https://forms.gle/aEVrocmPGtuEYXW56" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                                    <a href="/CR" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Join Now</a>
                                </div>
                            </div>
                            <div class="text-center p-4 ">
                                <h3 class="mb-0">SQL</h3>
                                <div class="mb-3">
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small>(123)</small>
                                </div>
                                <h5 class="mb-4">₹599.00</h5>
                            </div>

                        </div>
                    </div>
                    </Slider>
                

                    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 class="section-title bg-white text-center text-primary px-3">Courses</h6>
                        <h1 class="mb-5">Popular English Course</h1>
                    </div>

                    <Slider {...settings}>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="course-item bg-light">
                            <div class="position-relative overflow-hidden">
                                <img class="img-fluid" src="img/Intermediat English.jpg" alt="" />
                                <div class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                    <a href="https://forms.gle/aEVrocmPGtuEYXW56" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                                    <a href="/CR" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Join Now</a>
                                </div>
                            </div>
                            <div class="text-center p-4  ">
                                <h3 class="mb-0">Intermediate English</h3>
                                <div class="mb-3">
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small>(4.9)</small>
                                </div>
                                <h5 class="mb-4">₹399.00</h5>
                            </div>

                        </div>
                    </div>


                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="course-item bg-light">
                            <div class="position-relative overflow-hidden">
                                <img class="img-fluid" src="img/Proficiency English.jpg" alt="" />
                                <div class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                    <a href="https://forms.gle/aEVrocmPGtuEYXW56" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                                    <a href="/CR" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Join Now</a>
                                </div>
                            </div>
                            <div class="text-center p-4 ">
                                <h3 class="mb-0"> Proficiency English</h3>
                                <div class="mb-3">
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small>(123)</small>
                                </div>
                                <h5 class="mb-4" >₹799.00 </h5>
                            </div>

                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="course-item bg-light">
                            <div class="position-relative overflow-hidden">
                                <img class="img-fluid" src="img/Basic.jpg" alt="" />
                                <div class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                    <a href="https://forms.gle/aEVrocmPGtuEYXW56" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                                    <a href="/CR" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Join Now</a>
                                </div>
                            </div>
                            <div class="text-center p-4 ">
                                <h3 class="mb-0"> Advanced English</h3>
                                <div class="mb-3">
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small class="fa fa-star text-primary"></small>
                                    <small>(123)</small>
                                </div>
                                <h5 class="mb-4">₹999.00</h5>
                            </div>

                        </div>
                    </div>
                    </Slider>


                </div>
        </div>
    </div >
        


    </>
}

export default Courses;
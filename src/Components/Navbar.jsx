import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <> 
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <NavLink to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h2 className="m-0 text-primary"><i className="fa fa-book me-3"></i>Qualified-Bacche</h2>
                </NavLink>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <NavLink to="/" className="nav-item nav-link ">Home</NavLink>
                        <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                        <NavLink to="/courses" className="nav-item nav-link">Courses</NavLink>
                        <div className="nav-item dropdown">
                            <NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</NavLink>
                            <div className="dropdown-menu fade-down m-0">
                                <NavLink to="/team" className="dropdown-item">Our Team</NavLink>
                                <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
                                <NavLink to="/404" className="dropdown-item">404 Page</NavLink>
                            </div>
                        </div>
                        <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                    </div>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdYfD-7AqKC7Nc8sOO7aLPZClAMQgXikSzidXHMg_aYyDr8-A/viewform?embedded=true" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Join Now<i className="fa fa-arrow-right ms-3"></i></a>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
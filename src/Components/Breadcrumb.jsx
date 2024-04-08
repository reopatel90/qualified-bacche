import { useEffect, useState } from "react";

const Breadcrumb = () => {
    const [breadcrumb, setBreadcrumb] = useState([]);
    useEffect(() => {
        const url = window.location.pathname;
        url === '/about' ? setBreadcrumb(['Home', 'Pages', 'About']) : url === '/team' ? setBreadcrumb(['Home', 'Pages', 'Team']) : url === '/testimonial' ? setBreadcrumb(['Home', 'Pages', 'Testimonial']) : setBreadcrumb(['Home']);
    }, [breadcrumb]);
    return <> 
    
    <div class="container-fluid bg-primary py-5 mb-5 page-header">
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-lg-10 text-center">
                    <h1 class="display-3 text-white animated slideInDown">{breadcrumb}</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center">
                            <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                            <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                            <li class="breadcrumb-item text-white active" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    
    </>

}
export default Breadcrumb;
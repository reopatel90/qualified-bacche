import Breadcrumb from "./Breadcrumb";
import Carousel from "./Carousel";
import Courses from "./Courses";
import Services from "./Services";
import Team from "./Team";
import Hiring from "./Hiring"

const Dashboard = () => {
    return (
        <div>
            <Carousel/>
            <Breadcrumb/>
            {/* <h2>Dashboard</h2> */}
            <Services/>
           <Courses/>
           <Team/>
           <Hiring/>
        </div>
    );
    }

export default Dashboard;
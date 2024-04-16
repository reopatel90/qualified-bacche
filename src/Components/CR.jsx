const CR = () => {
  return (
    <div className="course-registration-container">
      <h2>Course Registration Form</h2>
      <form action="https://api.web3forms.com/submit" method="POST">
        <input
          type="hidden"
          name="access_key"
          value="62265e1d-02e4-4c76-a799-84e0eabce60c"
        />
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" name="Name" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="Email"
            type="email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input id="phone" type="tel" name="Phone" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="course">Choose your Course</label>
          <select id="course" name="Course" className="form-select">
            <option value=""  disabled selected>
              Choose your Course
            </option>
            <option  value="Full Stack Development">Full Stack Development @1499</option>
            <option  value="Web Development">Web Development @499</option>
            <option  value="Python Programming">Python Programming @499</option>
            <option  value="C++ Programming">C++ Programming @499</option>
            <option  value="C Programming">C Programming @499</option>
            <option  value="Java Programming">Java Programming @499</option>
            <option  value="SQL">SQL @499</option>
            <option  value="Intermediate English">Intermediate English @299</option>
            <option  value="Proficiency English">Proficiency English @699</option>
            <option  value="Advanced English">Advanced English @899</option>
          </select>
        </div>
        {/* <div className="form-group">
          <input id="date" type="text" className="form-control datepicker" />
          <label htmlFor="date">Date</label>
        </div> */}
        <button
          className="btn btn-primary waves-effect waves-light"
          type="submit"
        >
          Submit
          <i className="material-icons right"></i>
        </button>
      </form>
    </div>
  );
};

export default CR;

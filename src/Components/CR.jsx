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
            <option  value="Full Stack Development @1699">Full Stack Development @1699</option>
            <option  value="Web Development @699">Web Development @699</option>
            <option  value="Python Programming @599">Python Programming @599</option>
            <option  value="C++ Programming @799">C++ Programming @799</option>
            <option  value="C Programming @799">C Programming @799</option>
            <option  value="Java Programming @799">Java Programming @799</option>
            <option  value="SQL@599">SQL @599</option>
            <option  value="Intermediate English @399">Intermediate English @399</option>
            <option  value="Proficiency English @799">Proficiency English @799</option>
            <option  value="Advanced English @999">Advanced English @999</option>
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

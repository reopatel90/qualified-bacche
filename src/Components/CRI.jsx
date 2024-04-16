const CRI = () => {
  return (
    <div className="course-registration-container">
      <h2>Internship Registration Form</h2>
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
          <label htmlFor="internship">Choose your Internship Preference</label>
          <select id="intern" name="Intern" className="form-select">
            <option value=""  disabled selected>
              Choose your Internship Preference
            </option>
            <option  value="Full Stack Development Internship @1499">Full Stack Development Internship @1499</option>
            <option  value="Python Developer @1499">Python Developer @1499</option>
            <option  value="Data Analytics @1999">Data Analytics @1999</option>
            <option  value="MERN Developer @1899">MERN Developer @1899</option>
            <option  value="HR - Administration @1999">HR - Administration @1999</option>
            <option  value="SQL Developer @999">SQL Developer @999</option>
          </select>
        </div>
        {/* <div className="form-group">
          <input id="date" type="text" className="form-control datepicker" />
          <label htmlFor="date">Date</label>
        </div> */}
        <button
          className="btn btn-primary waves-effect waves-light"
          type="submit"
        > Submit
          <i className="material-icons right"></i>
        </button>
      </form>
    </div>
  );
};

export default CRI;

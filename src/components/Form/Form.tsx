import "./Form.css";

const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  //clear the form
  e.currentTarget.reset();
  alert("Form submitted!");
};

const Form = () => {
  return (
    <div className="form-container">
      <form className="form" onSubmit={onSubmit}>
        <div className="left-form">
          <h1 className="form-heading">Contact Us</h1>
          <div className="input-group">
            <input
              required={true}
              type="text"
              name="text"
              autoComplete="off"
              className="input"
            />
            <label className="user-label">Name</label>
          </div>
          <div className="input-group">
            <input
              required={true}
              type="text"
              name="text"
              autoComplete="off"
              className="input"
            />
            <label className="user-label">Email</label>
          </div>
          <div className="input-group">
            <input
              required={true}
              type="text"
              name="text"
              autoComplete="off"
              className="input"
            />
            <label className="user-label">Phone</label>
          </div>
        </div>
        <div className="vertical-line"></div>
        <div className="right-form">
          <div className="input-group">
            <textarea
              required={true}
              name="textarea"
              autoComplete="off"
              className="input"
            ></textarea>
            <label className="user-label">Message</label>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

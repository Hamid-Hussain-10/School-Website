import  { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    childName: "",
    parentName: "",
    phone: "",
    email: "",
    age: "",
    program: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container">
      <form className="form-content" onSubmit={handleSubmit}>
        <h3>Start Your Child Education</h3>

        <input
          type="text"
          name="childName"
          placeholder="Child Name"
          value={formData.childName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="parentName"
          placeholder="Parent Name"
          value={formData.parentName}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="phone"
          placeholder="Phone No"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <select
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select your age
          </option>
          <option value="3-5">3-5 years</option>
          <option value="6-8">6-8 years</option>
          <option value="9-11">9-11 years</option>
          <option value="12+">12+ years</option>
        </select>

        <select
          id="program"
          name="program"
          value={formData.program}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select a program
          </option>
          <option value="preschool">Preschool</option>
          <option value="kindergarten">Kindergarten</option>
          <option value="elementary">Elementary</option>
          <option value="after-school">After-School Program</option>
        </select>

        <textarea
          className="textarea"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>

      <div className="contact-image">
        <img src="./images/contact-image.jpg" alt="contact" />
      </div>
    </div>
  );
}

export default Contact;

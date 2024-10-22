import React, { useState } from "react";

function Contact() {
  const userData = {
    userName: "Debashree",
    password: "Deba@123",
  };

  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(formData);
    setFormData(userData);
  };

  return (
    <>
      <marquee>
        <h2>Contact page</h2>
      </marquee>
      <form style={{ display: "flex" }} onSubmit={handleSubmit}>
        <label>User name:</label>
        <input
          type="text"
          value={formData.userName}
          onChange={(e) =>
            setFormData({ ...formData, userName: e.target.value })
          }
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Contact;

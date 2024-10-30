import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
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
    //this is used because if the input data matches with the userData then it navigate to Home page
    if (
      userData.userName == formData.userName &&
      userData.password == formData.password
    ) {
      navigate("/");
    }
  };

  return (
    <>
      <marque>
        <h2>SignUp page</h2>
      </marque>
      <form onSubmit={handleSubmit}>
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

export default SignUp;

import React, { useState } from "react";

const Forms = () => {
  const [initial, setInitialState] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [ submittedForm, setSubmittedForm] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(initial);
    console.log(formData);
    setSubmittedForm(formData)
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
    <form onSubmit={handleSubmit} action="/submit-data" method="post">
    <label>Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="type here"
        onChange={handleChange}
        required
      />
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        placeholder="type here"
        onChange={handleChange}
        required
        
      />
      <label>Address</label>
      <input
        type="text"
        name="address"
        value={formData.address}
        placeholder="type here"
        onChange={handleChange}
        required
      />
      <button type="submit" aria-label="formSubmit">Click</button>
    </form>
    <div>
    {submittedForm && (
        <div>
        <p><strong>Name:</strong>{submittedForm.name}</p>
        <p><strong>Email:</strong>{submittedForm.email}</p>
        <p><strong>Address:</strong>{submittedForm.address}</p>
        </div>
    )}
    </div>
    </div>
  );
};

export default Forms;

import React from "react";

const Form = (props) => {
  let formData = props.formData;
  const setFormData = props.setFormData;
  function changeHandler(event) {
    const { name, type, value, checked } = event.target;

    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  console.log(formData);

  return (
    <div className="flex flex-col max-w-[550px] mx-auto">
      <label htmlFor="firstName">First name</label>

      <input
        name="firstName"
        type="text"
        value={formData.firstName}
        id="firstName"
        onChange={changeHandler}
        placeholder="Garv"
      />

      <label htmlFor="lastName">Last name</label>

      <input
        name="lastName"
        type="text"
        value={formData.lastName}
        id="lastName"
        onChange={changeHandler}
        placeholder="Bahal"
      />

      <label htmlFor="email">Email address</label>

      <input
        name="email"
        type="email"
        value={formData.email}
        id="email"
        onChange={changeHandler}
        placeholder="gbahal@duck.com"
      />
    </div>
  );
};

export default Form;

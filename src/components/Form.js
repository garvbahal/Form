import React from "react";

const Form = (props) => {
  const formData = props.formData;
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

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col max-w-[550px] mx-auto"
    >
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

      <label htmlFor="country">Country</label>
      <select
        name="country"
        value={formData.country}
        id="country"
        onChange={changeHandler}
      >
        <option value="India">India</option>
        <option value="United States">United States</option>
        <option value="Canada">Canada</option>
        <option value="Mexico">Mexico</option>
      </select>

      <label htmlFor="address">Street address</label>

      <input
        name="address"
        type="text"
        value={formData.address}
        id="address"
        onChange={changeHandler}
        placeholder="1234 Main St"
      />

      <label htmlFor="city">City</label>

      <input
        name="city"
        type="text"
        value={formData.city}
        id="city"
        onChange={changeHandler}
        placeholder="Hanumangarh"
      />

      <label htmlFor="state">State / Province</label>

      <input
        name="state"
        type="text"
        value={formData.state}
        id="state"
        onChange={changeHandler}
        placeholder="Rajasthan"
      />

      <label htmlFor="zipCode">ZIP / Postal code</label>

      <input
        name="zipCode"
        type="text"
        value={formData.zipCode}
        id="zipCode"
        onChange={changeHandler}
        placeholder="335512"
      />

      <div>
        <p>By Email</p>

        <div>
          <div>
            <input
              type="checkbox"
              name="comments"
              checked={formData.comments}
              id="comments"
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someone posts a comment on a posting.</p>
            </div>
          </div>
          <div>
            <input
              type="checkbox"
              name="candidates"
              checked={formData.candidates}
              id="candidates"
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when a candidate applies for a job.</p>
            </div>
          </div>
          <div>
            <input
              type="checkbox"
              name="offers"
              checked={formData.offers}
              id="offers"
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p>Push Notifications</p>
        <p>These are delivered via SMS to your mobile phone.</p>

        <div>
          <div>
            <input
              type="radio"
              name="notifications"
              id="everything"
              onChange={changeHandler}
              value="everything"
              checked={formData.notifications === "everything"}
            />
            <label htmlFor="everything">Everything</label>
          </div>
          <div>
            <input
              type="radio"
              name="notifications"
              id="same_as_email"
              onChange={changeHandler}
              value="same as email"
              checked={formData.notifications === "same as email"}
            />
            <label htmlFor="same_as_email">Same as email</label>
          </div>
          <div>
            <input
              type="radio"
              name="notifications"
              id="no_push_notifications"
              onChange={changeHandler}
              value="No push notifications"
              checked={formData.notifications === "No push notifications"}
            />
            <label htmlFor="no_push_notifications">No push notifications</label>
          </div>
        </div>
      </div>

      <button>Save</button>
    </form>
  );
};

export default Form;

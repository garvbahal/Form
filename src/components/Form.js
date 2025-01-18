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
      className="w-full md:max-w-[50%] flex flex-col  shadow p-8 mx-auto"
    >
      <label
        htmlFor="firstName"
        className=" text-sm font-medium leading-6 text-gray-900"
      >
        First name
      </label>

      <input
        name="firstName"
        type="text"
        value={formData.firstName}
        id="firstName"
        onChange={changeHandler}
        placeholder="Garv"
        className="w-full  mt-2 rounded-md p-2 text-gray-900 placeholder:text-gray-400 shadow-sm ring-1"
      />

      <label
        htmlFor="lastName"
        className=" text-sm font-medium leading-6 text-gray-900"
      >
        Last name
      </label>

      <input
        name="lastName"
        type="text"
        value={formData.lastName}
        id="lastName"
        onChange={changeHandler}
        placeholder="Bahal"
        className="w-full mt-2 rounded-md p-2 text-gray-900 placeholder:text-gray-400 shadow-sm ring-1"
      />

      <label
        htmlFor="email"
        className=" text-sm font-medium leading-6 text-gray-900"
      >
        Email address
      </label>

      <input
        name="email"
        type="email"
        value={formData.email}
        id="email"
        onChange={changeHandler}
        placeholder="gbahal@duck.com"
        className="w-full mt-2 rounded-md p-2 text-gray-900 placeholder:text-gray-400 shadow-sm ring-1"
      />

      <label
        htmlFor="country"
        className=" text-sm font-medium leading-6 text-gray-900"
      >
        Country
      </label>
      <select
        name="country"
        value={formData.country}
        id="country"
        onChange={changeHandler}
        className="w-full mt-2 rounded-md p-2 text-gray-900 bg-white shadow-sm ring-1"
      >
        <option value="India">India</option>
        <option value="United States">United States</option>
        <option value="Canada">Canada</option>
        <option value="Mexico">Mexico</option>
      </select>

      <label
        htmlFor="address"
        className=" text-sm font-medium leading-6 text-gray-900"
      >
        Street address
      </label>

      <input
        name="address"
        type="text"
        value={formData.address}
        id="address"
        onChange={changeHandler}
        placeholder="1234 Main St"
        className="w-full mt-2 rounded-md p-2 text-gray-900 placeholder:text-gray-400 shadow-sm ring-1"
      />

      <label
        htmlFor="city"
        className=" text-sm font-medium leading-6 text-gray-900"
      >
        City
      </label>

      <input
        name="city"
        type="text"
        value={formData.city}
        id="city"
        onChange={changeHandler}
        placeholder="Hanumangarh"
        className="w-full mt-2 rounded-md p-2 text-gray-900 placeholder:text-gray-400 shadow-sm ring-1"
      />

      <label
        htmlFor="state"
        className=" text-sm font-medium leading-6 text-gray-900"
      >
        State / Province
      </label>

      <input
        name="state"
        type="text"
        value={formData.state}
        id="state"
        onChange={changeHandler}
        placeholder="Rajasthan"
        className="w-full mt-2 rounded-md p-2 text-gray-900 placeholder:text-gray-400 shadow-sm ring-1"
      />

      <label
        htmlFor="zipCode"
        className=" text-sm font-medium leading-6 text-gray-900"
      >
        ZIP / Postal code
      </label>

      <input
        name="zipCode"
        type="text"
        value={formData.zipCode}
        id="zipCode"
        onChange={changeHandler}
        placeholder="335512"
        className="w-full mt-2 rounded-md p-2 text-gray-900 placeholder:text-gray-400 shadow-sm ring-1"
      />

      <div className="w-full mt-[8px]">
        <p className="text-sm font-semibold leading-6  text-gray-900">
          By Email
        </p>

        <div className="flex flex-col">
          <div className="flex gap-x-3 mt-4 mb-2 items-start">
            <input
              type="checkbox"
              name="comments"
              checked={formData.comments}
              id="comments"
              onChange={changeHandler}
              className="w-4 h-4 mt-1 "
            />
            <div className="flex flex-col items-start">
              <label
                htmlFor="comments"
                className="font-medium text-[14px] text-gray-900"
              >
                Comments
              </label>
              <p className="text-gray-500 text-[14px]">
                Get notified when someone posts a comment on a posting.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3 mb-2 items-start">
            <input
              type="checkbox"
              name="candidates"
              checked={formData.candidates}
              id="candidates"
              onChange={changeHandler}
              className="w-4 h-4 mt-1 "
            />
            <div className="flex flex-col items-start">
              <label
                htmlFor="candidates"
                className="font-medium text-[14px] text-gray-900"
              >
                Candidates
              </label>
              <p className="text-gray-500 text-[14px]">
                Get notified when a candidate applies for a job.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3 mb-2 items-start">
            <input
              type="checkbox"
              name="offers"
              checked={formData.offers}
              id="offers"
              onChange={changeHandler}
              className="w-4 h-4 mt-1 "
            />
            <div className="flex flex-col items-start">
              <label
                className="font-medium text-[14px] text-gray-900"
                htmlFor="offers"
              >
                Offers
              </label>
              <p className="text-gray-500 text-[14px]">
                Get notified when a candidate accepts or rejects an offer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <p className="text-sm font-semibold leading-6  text-gray-900">
          Push Notifications
        </p>
        <p className="text-sm text-gray-500">
          These are delivered via SMS to your mobile phone.
        </p>

        <div className="mt-4 flex flex-col gap-y-[8px]">
          <div className="flex gap-x-3 items-center ">
            <input
              type="radio"
              name="notifications"
              id="everything"
              onChange={changeHandler}
              value="everything"
              checked={formData.notifications === "everything"}
              className="h-4 w-4"
            />
            <label
              htmlFor="everything"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              Everything
            </label>
          </div>
          <div className="flex gap-x-3 items-center ">
            <input
              type="radio"
              name="notifications"
              id="same_as_email"
              onChange={changeHandler}
              value="same as email"
              checked={formData.notifications === "same as email"}
              className="h-4 w-4"
            />
            <label
              htmlFor="same_as_email"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              Same as email
            </label>
          </div>
          <div className="flex gap-x-3 items-center ">
            <input
              type="radio"
              name="notifications"
              id="no_push_notifications"
              onChange={changeHandler}
              value="No push notifications"
              checked={formData.notifications === "No push notifications"}
              className="h-4 w-4"
            />
            <label
              htmlFor="no_push_notifications"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              No push notifications
            </label>
          </div>
        </div>
      </div>

      <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 self-start">
        Save
      </button>
    </form>
  );
};

export default Form;

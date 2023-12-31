import { useState } from "react";
import { formInputs } from "./contacts-config";
import { faker } from "@faker-js/faker";

function ContactForm(props) {
  const formInitialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  };
  const [formData, setFormData] = useState(formInitialState);

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const createInputField = (input) => {
    return (
      <input
        onChange={handleOnChange}
        type={input.type}
        className="form-control"
        name={input.name}
        value={formData[input.name]}
      />
    );
  };

  const createTextArea = (input) => {
    return (
      <textarea
        onChange={handleOnChange}
        className="form-control"
        name={input.name}
        value={formData[input.name]}
      ></textarea>
    );
  };

  const renderedOfInput = {
    input: createInputField,
    textarea: createTextArea,
  };

  const saveContact = (event) => {
    event.preventDefault();

    props.onSave({ ...formData, image: faker.internet.avatar() });

    setFormData(formInitialState);
  };

  return (
    <div className="">
      <form onSubmit={saveContact}>
        {formInputs.map((input, index) => (
          <div className="mb-3" key={index}>
            <label className="form-label">{input.label}</label>
            {renderedOfInput[input.tag](input)}
          </div>
        ))}

        <div className="mt-3 text-center">
          <input type="submit" className="btn btn-dark" value="Save Contact" />
        </div>
      </form>

      {/* <form>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value="Saquib"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value=""
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nickname</label>
          <input
            type="text"
            className="form-control"
            name="nickname"
            value="Bakhshi"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input type="number" className="form-control" name="phone" value="" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" value="" />
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <textarea className="form-control" name="address"></textarea>
        </div>
      </form> */}
    </div>
  );
}

export { ContactForm };
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    phoneNumber: "",
    profileImage: "",
    emergencyContacts: [{ number: "" }],
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};
    if (!formData.name) {
      formErrors.name = "Name is required";
    }
    if (!formData.gender) {
      formErrors.gender = "Gender is required";
    }
    if (!formData.phoneNumber) {
      formErrors.phoneNumber = "Phone number is required";
    }
    if (!formData.emergencyContacts[0].number) {
      formErrors.emergencyContact =
        "At least one emergency contact is required";
    }
    return formErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEmergencyContactChange = (index, e) => {
    const newContacts = [...formData.emergencyContacts];
    newContacts[index].number = e.target.value;
    setFormData({
      ...formData,
      emergencyContacts: newContacts,
    });
  };

  const handleAddEmergencyContact = () => {
    setFormData({
      ...formData,
      emergencyContacts: [...formData.emergencyContacts, { number: "" }],
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          profileImage: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      sendToBackend(formData);
    } else {
      setErrors(formErrors);
    }
  };

  const sendToBackend = (data) => {
    // Mock function to simulate sending data to the backend
    console.log("Sending data to backend:", data);
    // Here you'd typically use fetch or axios to send the data to your backend
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('your-image-url')" }}
    >
      <div className="bg-white bg-opacity-90 p-6 rounded-lg w-11/12 sm:w-96  relative">
        <h1 className="text-[35px] font-bold text-center text-red-500">
          Nirbhaya{" "}
        </h1>
        <p className="text-center text-gray-800 mb-4">Be Safe , Be Seen</p>

        <div className="flex flex-col items-center mt-10">
          <div className="mb-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="profileImageUpload"
            />
            <label htmlFor="profileImageUpload" className="cursor-pointer">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                {formData.profileImage ? (
                  <img
                    src={formData.profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    Upload
                  </div>
                )}
              </div>
            </label>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block text-gray-700">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-700">
              Phone Number
            </label>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={formData.phoneNumber}
              placeholder="Enter your Phone number"
              onChange={handleChange}
              pattern="^\+?[0-9]{0,15}$"
              title="Please enter a valid phone number with numbers only, optionally starting with a +."
              maxLength="10"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Emergency Contact</label>
            {formData.emergencyContacts.map((contact, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="number"
                  placeholder="Enter your Emergency Contact"
                  name="emergencyContact"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={contact.number}
                  onChange={(e) => handleEmergencyContactChange(index, e)}
                  pattern="^\+?[0-9]{0,15}$"
                  title="Please enter a valid phone number with numbers only, optionally starting with a +."
                  maxLength="10"
                  minLength="10"
                />
                {index === 0 && (
                  <button
                    type="button"
                    onClick={handleAddEmergencyContact}
                    className="ml-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition duration-200 ease-in-out"
                  >
                    Add
                  </button>
                )}
              </div>
            ))}
            {errors.emergencyContact && (
              <p className="text-red-500 text-xs mt-1">
                {errors.emergencyContact}
              </p>
            )}
          </div>

          {/* Sign In Option */}
          <div className="mt-4 text-center">
            <p className="text-gray-600">Already have an account?</p>
            <Link
              to="/userLogin"
              className="text-blue-600 hover:text-blue-800 underline transition duration-200"
            >
              Log in here
            </Link>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold p-2 mt-4 transition duration-200 ease-in-out"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;

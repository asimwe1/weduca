import React, { useState } from "react";
import emailjs from "@emailjs/browser";
// require('dotenv').config();


const countries = [
  "Canada",
  "United States",
  "United Kingdom",
  "Australia",
  "Ireland",
  "New Zealand",
  "Germany",
  "France",
  "Other"
];

const formFields = [
  { name: "firstName", label: "Contact First Name", type: "text", required: true },
  { name: "lastName", label: "Contact Last Name", type: "text", required: true },
  { name: "email", label: "Contact Email", type: "email", required: true },
  { name: "phone", label: "Phone Number", type: "tel", required: true },
  { name: "title", label: "Contact Title", type: "text", required: true }
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    country: "",
    schoolName: "",
    isReferred: false,
    comments: "",
    receiveUpdates: false,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    title: "",
    referredName: "",
    referredEmail: ""
  });
  const [notification, setNotification] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white flex justify-center items-center min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900">
            A Platform That Supports You End-to-End
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8">
          <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4">
            <div>
              <label htmlFor="country" className="block mb-1 text-sm font-medium">
                Destination Country<span className="text-red-500">*</span>
              </label>
              <select
                id="country"
                name="country"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
                value={formData.country}
                onChange={handleChange}
              >
                <option value="">--select an item--</option>
                {countries.map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>
            
            {formFields.map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name} className="block mb-1 text-sm font-medium">
                  {field.label}{field.required && <span className="text-red-500">*</span>}
                </label>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required={field.required}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                />
              </div>
            ))}

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="isReferred"
                name="isReferred"
                checked={formData.isReferred}
                onChange={handleChange}
              />
              <label htmlFor="isReferred">Referred by someone in Weduka Apply Ltd</label>
            </div>

            {formData.isReferred && (
              <>
                <div>
                  <label htmlFor="referredName" className="block mb-1 text-sm font-medium">
                    Referred by Full Name
                  </label>
                  <input
                    type="text"
                    id="referredName"
                    name="referredName"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={formData.referredName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="referredEmail" className="block mb-1 text-sm font-medium">
                    Referred by Email
                  </label>
                  <input
                    type="email"
                    id="referredEmail"
                    name="referredEmail"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={formData.referredEmail}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}

            <div>
              <label htmlFor="comments" className="block mb-1 text-sm font-medium">
                Any additional comments:
              </label>
              <textarea
                id="comments"
                name="comments"
                rows={3}
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.comments}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 w-full rounded-md font-medium hover:bg-green-700"
            >
              Submit
            </button>
          </form>

          <div className="hidden lg:block w-[80%] lg:w-[40%]">
            <img
              src="https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323439/School-Footer_Illustration_ldbjwo.webp"
              alt="School recruitment illustration"
              className="w-full h-auto"
            />
          </div>
        </div>

        {notification.message && (
          <div className={`mt-4 p-4 text-white text-center rounded-md ${notification.type === "success" ? "bg-green-600" : "bg-red-600"}`}>
            {notification.message}
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
"use client";
import React, { useState } from "react";
//import { useHistory } from 'react-router-dom';

const DonorRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bloodGroup: "",
    lastDonationDate: "",
    DOB: "",
  });

  //const history = useHistory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation and submission logic here
    console.log(formData);
    //history.push('/dashboard'); // Redirect to dashboard after successful registration
  };

  return (
    <div class="container m-auto bg-red-500 text-white p-4">
      <h1 class="text-center text-3xl">Donor Registration</h1>
      <form onSubmit={handleSubmit} class="mt-4">
        <div class="flex flex-wrap -mx-2">
          <div class="w-full md:w-1/2 px-2 mb-4">
            <label for="name" class="block">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              class="input-field col s6 w-full bg-red-100 text-red-800 border border-red-500 rounded p-2"
            />
          </div>
          <div class="w-full md:w-1/2 px-2 mb-4">
            <label for="email" class="block">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              class="input-field col s6 w-full bg-red-100 text-red-800 border border-red-500 rounded p-2"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-2">
          <div class="w-full md:w-1/2 px-2 mb-4">
            <label for="phone" class="block">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              class="input-field col s6 w-full bg-red-100 text-red-800 border border-red-500 rounded p-2"
            />
          </div>
          <div class="w-full md:w-1/2 px-2 mb-4">
            <label for="bloodGroup" class="block">
              Blood Group
            </label>
            <select
              id="bloodGroup"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
              class="input-field col s6 w-full bg-red-100 text-red-800 border border-red-500 rounded p-2"
            >
              <option value="" disabled>
                Select your blood group
              </option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
        </div>
        <div class="flex flex-wrap -mx-2">
          <div class="w-full md:w-1/2 px-2 mb-4">
            <label for="lastDonationDate" class="block">
              Last Donation Date
            </label>
            <input
              id="lastDonationDate"
              type="date"
              name="lastDonationDate"
              value={formData.lastDonationDate}
              onChange={handleChange}
              required
              class="input-field col s6 w-full bg-red-100 text-red-800 border border-red-500 rounded p-2"
            />
          </div>
          <div class="w-full md:w-1/2 px-2 mb-4">
            <label for="DOB" class="block">
              Date of Birth
            </label>
            <input
              id="DOB"
              type="date"
              name="DOB"
              value={formData.DOB}
              onChange={handleChange}
              required
              class="input-field col s6 w-full bg-red-100 text-red-800 border border-red-500 rounded p-2"
            />
          </div>
          <div class="w-full md:w-1/2 px-2 mb-4"></div>
        </div>
        <div class="container bg-red-500 text-white p-4">
          <h1 class="text-center text-3xl">Additional Information</h1>
          <label for="address" class="block">
            Address Line 1
          </label>
          <textarea
            id="address_line1"
            type="text"
            rows="3"
            name="address_line1 "
            value={formData.address}
            onChange={handleChange}
            required
            class="input-field col s6 w-full bg-red-100 text-red-800 border border-red-500 rounded p-2"
          />
          <label for="Secondary_address" class="block">
            SecondaryAddress 
          </label>
          <textarea
            id="SecondaryAddress"
            type="text"
            name="SecondaryAddress"
            value={formData.address}
            onChange={handleChange}
            required
            class="input-field col s6 w-full bg-red-100 text-red-800 border border-red-500 rounded p-2"
          />

          <label for="street" class="block">
            street
          </label>
          <textarea
            id="street"
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
            class="input-field col s6 w-full bg-red-100 text-red-800 border border-red-500 rounded p-2"
          />

          <label for="City" class="block">
            City
          </label>
          <textarea
            id="city"
            type="text"
            name="city"
            value={formData.street}
            onChange={handleChange}
            required
            class="input-field col s6 w-full bg-red-100 text-red-800 border border-red-500 rounded p-2"
          />

          <label for="PINCODE" class="block">
            Pincode
          </label>
          <textarea
            id="Pincode"
            type="number"
            name="Pincode"
            value={formData.street}
            onChange={handleChange}
            required
            class="input-field col s6 w-full bg-red-100 text-red-800 border border-red-500 rounded p-2"
          />
        </div>

        <button
          class="btn bg-white text-red-500 hover:bg-red-500 hover:text-white py-2 px-4 rounded"
          type="submit"
          name="action"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DonorRegistration;

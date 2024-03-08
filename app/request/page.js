"use client";
import React from "react";
import { useState } from "react";

function BloodDonorConnectPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bloodGroup: "",
    lastDonationDate: "",
    DOB: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-100 rounded shadow-md p-4 flex flex-col gap-4">
        <h2 className="text-xl font-bold text-gray-800">Request</h2>
        <div className="grid grid-cols-1 gap-9">
          <div className="flex items-center">
            <label htmlFor="bloodType" className="mr-2 text-gray-700">
              Blood Type:
            </label>
            <select
              id="bloodType"
              className="w-full rounded shadow-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="">All</option>
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
          <div className="flex items-center">
            <label htmlFor="rhFactor" className="mr-2 text-gray-700">
              RH Factor:
            </label>
            <select
              id="unit"
              className="w-full rounded shadow-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="">All</option>
              <option value="positive">Positive</option>
              <option value="negative">Negative</option>
            </select>
          </div>
          <div className="flex items-center">
            <h3 className="text-base font-bold text-gray-800 mr-2">Urgency:</h3>
            <div className="flex gap-2">
              <button
                type="button"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-1 px-2 rounded shadow-sm focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
                value="all"
              >
                All
              </button>
              <button
                type="button"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-1 px-2 rounded shadow-sm focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
                value="urgent"
              >
                Urgent
              </button>
              <button
                type="button"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-1 px-2 rounded shadow-sm focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
                value="normal"
              >
                Normal
              </button>
            </div>
          </div>
          {/* Time */}
          <div class="w-full md:w-1/2 px-2 mb-4">
            <label for="lastDonationDate" class="block">
              Date and Time
            </label>
            <input
              id="lastDonationDate"
              type="datetime-local"
              name="lastDonationDate"
              value={formData.DOB}
              onChange={handleChange}
              required
              class="input-field col s6 w-full text-black border border-gray-500 rounded p-2"
            />
          </div>
          {/* Additional filter options can be added here */}
          <div className="flex flex-col gap-8">
            <h3 className="text-base font-bold text-gray-800 mr-2">
              Recipient Information:
            </h3>
            <div className="grid grid-cols-1 gap-2">
              <div>
                <label htmlFor="recipientName" className="block text-gray-700">
                  Recipient Name:
                </label>
                <input
                  type="text"
                  id="recipientName"
                  name="recipientName"
                  className="w-full rounded shadow-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              {/* Optionally include fields for phone number or address */}
              <div>
                <label htmlFor="recipientPhone" className="block text-gray-700">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="recipientPhone"
                  name="recipientPhone"
                  className="w-full rounded shadow-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="recipientAddress"
                  className="block text-gray-700"
                >
                  Address:
                </label>
                <textarea
                  id="recipientAddress"
                  name="recipientAddress"
                  rows="3"
                  className="w-full rounded shadow-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                ></textarea>
              </div>
              <div>
                <label htmlFor="HosptialName" className="block text-gray-700">
                  Hosptial Name:
                </label>
                <input
                  type="text"
                  id="HosptialName"
                  name="HosptialName"
                  rows="3"
                  className="w-full rounded shadow-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="HosptialAddress"
                  className="block text-gray-700"
                >
                  Hosptial Address:
                </label>
                <textarea
                  id="HosptialAddress"
                  name="HosptialAddress"
                  rows="3"
                  className="w-full rounded shadow-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                ></textarea>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              Adding recipient information is optional and will be used for
              potential communication regarding the donation.
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Apply Request
        </button>
      </div>
    </div>
  );
}

export default BloodDonorConnectPage;

"use client";
import React, { useState } from 'react';

const Questionnaire = () => {
  const [previouslyDonated, setPreviouslyDonated] = useState(false);
  const [medicalConditions, setMedicalConditions] = useState([]);
  const [medications, setMedications] = useState([]);
  const [surgeryHistory, setSurgeryHistory] = useState(null);

  const handlePreviouslyDonated = (event) => {
    setPreviouslyDonated(event.target.value === 'Yes');
  };

  const handleMedicalConditionChange = (event) => {
    const isChecked = event.target.checked;
    const condition = event.target.value;

    if (isChecked) {
      setMedicalConditions([...medicalConditions, condition]);
    } else {
      setMedicalConditions(medicalConditions.filter((c) => c !== condition));
    }
  };

  const handleMedicationChange = (event) => {
    const isChecked = event.target.checked;
    const medication = event.target.value;

    if (isChecked) {
      setMedications([...medications, medication]);
    } else {
      setMedications(medications.filter((m) => m !== medication));
    }
  };

  const handleSurgeryChange = (event) => {
    setSurgeryHistory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Replace this with your logic to submit data (e.g., send to backend)
    console.log({
      previouslyDonated,
      medicalConditions,
      medications,
      surgeryHistory,
    });
  };

  return (
    <div class="container m-auto bg-red-500 text-white p-4">
      <h1 className="text-center text-3xl">Blood Donation Questionnaire</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        {/* Previously Donated */}
        <label className="block">
          Have you donated previously?
          <br />
          <input
            type="radio"
            name="previouslyDonated"
            value="Yes"
            checked={previouslyDonated}
            onChange={handlePreviouslyDonated}
            className="mr-2"
          />
          Yes
          <input
            type="radio"
            name="previouslyDonated"
            value="No"
            checked={!previouslyDonated}
            onChange={handlePreviouslyDonated}
            className="ml-4 mr-2"
          />
          No
        </label>

        {/* Medical Conditions */}
        <div className="mt-4">
          <h3>In the last six months have you had any of the following?</h3>
          <div className="flex flex-wrap -mx-2">
            <label className="w-full md:w-1/3 px-2">
              <input
                type="checkbox"
                value="Tattooing"
                onChange={handleMedicalConditionChange}
              />
              Tattooing
            </label>
            {/* Add similar labels for other medical conditions */}
          </div>
        </div>

        {/* Surgery History */}
        <div className="mt-4">
          <h3>Have you had any surgeries in the past?</h3>
          <input
            type="text"
            value={surgeryHistory}
            onChange={handleSurgeryChange}
            className="input-field col s6 w-full bg-blue-100 text-blue-800 border border-blue-500 rounded p-2"
          />
        </div>

        {/* Medications */}
        <div className="mt-4">
          <h3>Do you currently take any medications?</h3>
          <div className="flex flex-wrap -mx-2">
            <label className="w-full md:w-1/3 px-2">
              <input
                type="checkbox"
                value="Medication A"
                onChange={handleMedicationChange}
              />
              Medication A
            </label>
            {/* Add similar labels for other medications */}
          </div>
        </div>

        {/* Submit Button */}
        <button
          className="btn bg-white text-red-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded mt-4"
          type="submit"
          name="action"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Questionnaire;

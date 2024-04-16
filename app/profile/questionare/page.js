"use client";
import React, { useState } from "react";
//import app, { db } from "../firebase";
import withAuthRender from "@/app/context/withAuth";
import { useRouter } from "next/navigation";

const Questionnaire = () => {
  const router = useRouter();
  const [previouslyDonated, setPreviouslyDonated] = useState(false);
  const [healthy, sethealthy] = useState(false);
  const [Lastdonation, setLastdonation] = useState(false);
  const [Last7days, setLast7days] = useState(false);
  const [medicalConditions, setMedicalConditions] = useState([]);
  const [medications, setMedications] = useState([]);
  const [surgeryHistory, setSurgeryHistory] = useState("");

  const handlePreviouslyDonated = (event) => {
    setPreviouslyDonated(event.target.value === "Yes");
  };
  const handlehealthy = (event) => {
    sethealthy(event.target.value === "Yes");
  };
  const handleLastdonation = (event) => {
    setLastdonation(event.target.value === "Yes");
  };
  const handleLast7days = (event) => {
    setLast7days(event.target.value === "Yes");
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await firestore
        .collection("questionnaireResponses")
        .add({
          previouslyDonated,
          medicalConditions,
          medications,
          healthy,
          Lastdonation,
          Last7days,
          surgeryHistory,
        });

      console.log("Response added with ID: ", response.id);

      // Reset form fields after successful submission
      setPreviouslyDonated(false);
      sethealthy(false);
      setLastdonation(false);
      setLast7days(false);
      setMedicalConditions([]);
      setMedications([]);
      setSurgeryHistory("");

      // Optionally, show a success message to the user
    } catch (error) {
      console.error("Error adding response: ", error);
      // Optionally, show an error message to the user
    }
    router.push("stats");
    //localStorage.removeItem("userData");
  };

  return (
    <div className="container m-auto bg-red-500 text-white p-4">
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

        {/* HEALTHY*/}
        <label className="block">
          <br />
          Are you feeling well and in good health today?
          <br />
          <input
            type="radio"
            name="healthy"
            value="Yes"
            checked={healthy}
            onChange={handlehealthy}
            className="mr-2"
          />
          Yes
          <input
            type="radio"
            name="healthy"
            value="No"
            checked={!healthy}
            onChange={handlehealthy}
            className="ml-4 mr-2"
          />
          No
        </label>

        {/* Lastdonation*/}
        <label className="block">
          <br />
          Have you already given blood in the last 3 months?
          <br />
          <input
            type="radio"
            name="Lastdonation"
            value="Yes"
            checked={Lastdonation}
            onChange={handleLastdonation}
            className="mr-2"
          />
          Yes
          <input
            type="radio"
            name="Lastdonation"
            value="No"
            checked={!Lastdonation}
            onChange={handleLastdonation}
            className="ml-4 mr-2"
          />
          No
        </label>

        {/* Last7days*/}
        <label className="block">
          <br />
          In the last 7 days, have you seen a doctor, dentist or any other
          healthcare professional or are you waiting to see one (except for
          routine screening appointments)?
          <br />
          <input
            type="radio"
            name="Last7days"
            value="Yes"
            checked={Last7days}
            onChange={handleLast7days}
            className="mr-2"
          />
          Yes
          <input
            type="radio"
            name="Last7days"
            value="No"
            checked={!Last7days}
            onChange={handleLast7days}
            className="ml-4 mr-2"
          />
          No
        </label>

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
              <br />
              <input
                type="checkbox"
                value="refused"
                onChange={handleMedicalConditionChange}
              />
              Have you ever been refused as a blood donor, or told not to donate
              blood?
              <br />
              <input
                type="checkbox"
                value="hiv"
                onChange={handleMedicalConditionChange}
              />
              Have you ever been tested for HIV?
              <br />
              <input
                type="checkbox"
                value="hepatitis"
                onChange={handleMedicalConditionChange}
              />
              Have you ever been tested for Hepatitis?
              <br />
            </label>

            {/* Add similar labels for other medical conditions */}
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

export default withAuthRender(Questionnaire);

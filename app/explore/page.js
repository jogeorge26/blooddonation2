import React from "react";

export default function Explore() {
  return (
    <div>
      <section className="bg-red-100 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-500 text-center mb-8">
            About Blood Donation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Blood donation is a selfless act that can save lives. By
                donating blood, youre giving the gift of health to someone in
                need. Every unit of donated blood can help up to three people.
                The blood you donate goes through a rigorous testing process to
                ensure its safety.
              </p>
              <ul className="list-disc pl-4 text-gray-700">
                <li>
                  Anyone in good health between the ages of 17 and 70 (with some
                  variations) can generally donate blood.
                </li>
                <li>
                  The donation process is typically quick and easy, taking about
                  an hour.
                </li>
                <li>
                  There are many blood banks and donation centers located
                  throughout the country, making it convenient to donate.
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/6823567/pexels-photo-6823567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Blood donation illustration"
                className="w-full rounded shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            How to Donate Blood
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ol className="list-decimal pl-4 text-gray-700">
                <li>
                  Check your eligibility: Visit the official website of your
                  local blood bank or [link to national blood donation
                  eligibility information]. They will have information on age,
                  weight, health, and other eligibility criteria.
                </li>
                <li>
                  Find a blood drive near you: Use the search tool on your local
                  blood bank website or search online for nearby blood drives.
                  Many blood banks also offer mobile apps for easy search and
                  appointment scheduling.
                </li>
                <li>
                  Schedule an appointment (optional): While walk-ins are often
                  welcome, scheduling an appointment can help ensure a smoother
                  donation experience and reduce waiting times.
                </li>
                <li>
                  Eat a healthy meal and drink plenty of water before your
                  donation. This will help you feel better during and after the
                  process.
                </li>
                <li>
                  Bring a valid ID with you to the blood drive. This is required
                  to verify your identity and eligibility.
                </li>
              </ol>
            </div>
            <div>
              <img
                src="https://www.kauveryhospital.com/images/newsletters/2022/december/blood-donation.jpg"
                alt="Blood donation steps illustration"
                className="w-full rounded shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* section */}
      <div className="bg-gray-100 p-4 mx-28 px-12 py-16 rounded shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Search Blood Requests
        </h2>
        <form className="grid grid-cols-1 gap-4">
          <div className="flex items-center">
            <label htmlFor="bloodGroup" className="mr-2 text-gray-700">
              Blood Group:
            </label>
            <select
              id="bloodGroup"
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
            <label htmlFor="location" className="mr-2 text-gray-700">
              Location:
            </label>
            <input
              type="text"
              id="location"
              className="w-full rounded shadow-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Find Requests
          </button>
        </form>
      </div>
      {/* section */}
      {/* section */}
      <div className="p-4 rounded shadow-md mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Blood Donation Information
        </h2>
        <ul className="list-disc pl-4">
          <li className="text-gray-700">
            Eligibility requirements for blood donation.
          </li>
          <li className="text-gray-700">
            Steps involved in the blood donation process.
          </li>
          <li className="text-gray-700">Benefits of donating blood.</li>
        </ul>
        <a href="/learn-more" className="text-blue-500 hover:underline">
          Learn More About Blood Donation
        </a>
      </div>
      {/* section */}
      <section className="bg-red-500 py-8 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Be a Hero. Donate Blood Today.
          </h2>
          <p className="text-xl text-white leading-relaxed mb-6">
            Every blood donation has the power to save up to three lives. Join
            the thousands making a difference and help those in need.
          </p>
          <button
            type="button"
            className="bg-white hover:bg-gray-100 text-red-500 font-bold py-2 px-4 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            Find a Blood Drive or Donate Now
          </button>
        </div>
      </section>

      {/* section */}
    </div>
  );
}

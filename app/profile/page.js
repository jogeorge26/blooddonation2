import Link from "next/link";
import React from "react";
import DonorRequestCard from "../ui/donor-request-card";


export default function Profile() {
  return (
    <div className="flex w-full h-screen">
      {/* This is the sidebar section */}
      <div className="w-64 bg-gray-100 p-4">
        <h1 className="text-xl font-bold mb-4">Board</h1>
        <ul className="space-y-2">
          {/* <li className="hover:bg-gray-200 p-2 rounded-md">
            <Link href="/" className="text-gray-600">
              Home
            </Link>
          </li> */}
          <li className="text-gray-600 font-bold p-2 rounded-md">
            Notifications
          </li>
          <li className="hover:bg-gray-200 p-2 rounded-md">
            <a href="#" className="text-gray-600">
              Donation Request
            </a>
          </li>
          <li className="hover:bg-gray-200 p-2 rounded-md">
            <a href="#" className="text-gray-600">
              Requests List
            </a>
          </li>
          <li className="hover:bg-gray-200 p-2 rounded-md">
            <a href="#" className="text-gray-600">
              Donation Stats
            </a>
          </li>
          <li className="hover:bg-gray-200 p-2 rounded-md">
            <a href="#" className="text-gray-600">
              Dashboard
            </a>
          </li>
        </ul>
      </div>

      {/* This is the main content section */}
      <div className="flex-1 p-4">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">Notifications</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-600">
              New
            </button>
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-600">
              This week
            </button>
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-600">
              Filter
            </button>
          </div>
        </div>

{/* Request card */}
        <div className="mb-4">
          <h3 className="font-bold mb-2">Urgent Requests</h3>
          <div className="bg-gray-100 p-4 m-2 rounded-md shadow-md">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-bold">Joyal</h4>
              <span className="text-sm text-gray-500">2h ago</span>
            </div>
            <p className="text-gray-600">Urgent request, please help</p>
          </div>
          {/* request 2 */}
          <DonorRequestCard/>
        </div>

        

{/* New request */}
        <div className="mb-4">
          <h3 className="font-bold mb-2">New Requests</h3>
          <div className="bg-gray-100 p-4 rounded-md shadow-md">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-bold">Request AB123</h4>
              <span className="text-sm text-gray-500">New</span>
            </div>
          </div>
        </div>

        {/* Add more sections here for other notifications */}

        <div className="flex justify-end">
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
            Select all
          </button>
          <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-600 ml-2">
            Unselect all
          </button>
        </div>

        <div className="mt-4">
          <a href="#" className="text-blue-500 hover"></a>
          <div className="bg-gray-100 p-4 rounded-md shadow-md mb-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-bold">Anand Sudeep</h4>
              <span className="text-sm text-gray-500">Yesterday</span>
            </div>
            <p className="text-gray-600">
              Donated $50 to the Blood Bank campaign.
            </p>
            <div className="flex justify-end mt-2">
              <button className="px-2 py-1 bg-green-500 hover:bg-green-600 text-white rounded-md">
                Thank You!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

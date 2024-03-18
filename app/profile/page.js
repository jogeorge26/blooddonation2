"use client";
import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import DonorRequestCard from "../ui/donor-request-card";
import { AuthProvider, AuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import {
  collection,
  query,
  where,
  getDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";

export default function Profile({ userId }) {
  const router = useRouter();
  const {
    user: { donorId, email, name },
    loading,
  } = useContext(AuthContext); // Use this line

  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Removed unnecessary variable: const { userId } = useContext(AuthContext); // Not needed

  useEffect(() => {
    console.log("Profile page userId:", donorId, name, email); // Use user object properties

    const fetchData = async () => {
      if (donorId) {
        setIsLoading(true);
        setError(null);

        try {
          const donorRef = doc(db, "donors", donorId);
          const donorSnap = await getDoc(donorRef);

          if (donorSnap.empty) {
            console.warn("No donor document found for user:", donorId);
          } else {
            const donorData = donorSnap.data();
            console.log(donorData);
            console.log(donorData.name);
            setUserData(donorData);
          }
        } catch (err) {
          console.error("Error fetching donor data:", err);
          setError(err.message || "An error occurred while fetching data.");
        } finally {
          setIsLoading(false);
        }
      } else {
        router.push("/login");
      }
    };

    fetchData();

    return () => {
      // Cleanup function (optional)
    };
  }, [donorId]); // Re-run useEffect on userId changes

  if (isLoading) {
    return <div>Loading user data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // if (!donorId) {
  //   router.push("/login");
  // }

  if (!userData) {
    return <div>No donor data found for this user.</div>;
  }
  return (
    <AuthProvider>
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
              Notifications {userData.name}
            </li>
            <li className="hover:bg-gray-200 p-2 rounded-md">
              <a href="#" className="text-gray-600">
                Profile
              </a>
            </li>
            <li className="hover:bg-gray-200 p-2 rounded-md">
              <a href="#" className="text-gray-600">
                Donation Request
              </a>
            </li>
            <li className="hover:bg-gray-200 p-2 rounded-md">
              <a href="#" className="text-gray-600">
                Donation Stats
              </a>
            </li>
          </ul>
        </div>

        {/* This is the main content section */}
        <div className="flex-1 p-4">
          <div className="flex justify-between mb-4">
            <h2 className="text-4xl font-bold">Profile</h2>
            {/* <div className="flex space-x-2">
              <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-600">
                New
              </button>
              <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-600">
                This week
              </button>
              <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-600">
                Filter
              </button>
            </div> */}
          </div>
          {/* Profile  */}

          <div className="flex flex-col space-y-4">
            <h2 className="text-xl font-bold">Donor Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Name:</p>
                <p className="font-bold">{userData.name}</p>
              </div>
              <div>
                <p className="text-gray-600">Email:</p>
                <p className="font-bold">{userData.email}</p>
              </div>
              <div>
                <p className="text-gray-600">Phone:</p>
                <p className="font-bold">{userData.phone || "Not provided"}</p>
              </div>
              <div>
                <p className="text-gray-600">Date of Birth:</p>
                <p className="font-bold">{userData.DOB || "Not provided"}</p>
              </div>
              <div>
                <p className="text-gray-600">Blood Group:</p>
                <p className="font-bold">
                  {userData.bloodGroup || "Not provided"}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Last Donation Date:</p>
                <p className="font-bold">
                  {userData.lastDonationDate || "Not provided"}
                </p>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-600">Address:</p>
                <p className="font-bold">
                  {userData.addr1} {userData.secAddr && `, ${userData.secAddr}`}
                </p>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-600">City & District:</p>
                <p className="font-bold">
                  {userData.city}, {userData.district}
                </p>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-600">Pincode:</p>
                <p className="font-bold">
                  {userData.pincode || "Not provided"}
                </p>
              </div>
            </div>
          </div>

          {/* Request card */}
          <div className="mb-4">
            <h3 className="font-bold mb-2">Urgent Requests</h3>
            <div className="bg-gray-100 p-4 m-2 rounded-md shadow-md">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold">{"donorData.name"}</h4>
                <span className="text-sm text-gray-500">2h ago</span>
              </div>
              <p className="text-gray-600">Urgent request, please help</p>
            </div>
            {/* request 2 */}
            <DonorRequestCard />
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
    </AuthProvider>
  );
}

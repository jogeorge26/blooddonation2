import Link from "next/link";
import { useRouter } from "next/navigation";
import { RequestIdContext } from "../../context/RequestContext";
import React, { useContext } from "react";
///profile/questionare
export default function DonorRequestCard({ request }) {
  //const { setRequestId } = useContext(RequestIdContext);
  const router = useRouter();
  // Destructure
  const {
    rname,
    bloodgroup,
    unite,
    urgency,
    date,
    time,
    hospitalname,
    district,
  } = request;

  const handleSub = () => {
    router.push("/profile/questionare");
    console.log("Data r.id" + request.id);
    localStorage.removeItem("userSelectedRequest");
    localStorage.setItem(
      "userSelectedRequest",
      JSON.stringify({
        requestId: request.id,
      })
    );
  };
  return (
    <>
      <div className="bg-gray-100 p-4 m-2 rounded-md shadow-md">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-bold">{rname}</h4>
          <span className="text-sm text-gray-500">
            {`${urgency}   [${bloodgroup}]`}
          </span>
        </div>
        <p className="text-gray-600">
          {unite} units of blood needed at {hospitalname} ({district})
        </p>
        {/* Optionally display date and time if needed */}
        <p className="text-gray-600">
          Date: {date}, Time: {time}
        </p>
        <div className="flex justify-end">
          <button onClick={handleSub}>
            <div className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700">
              Accept
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";
export default function DonorRequestCard({ request }) {
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
          <Link href="/profile/questionare">
            <div className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700">
              Accept
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

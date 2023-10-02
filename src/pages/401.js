import React from "react";
import Link from "next/link";
// import Image from "next/image";

const NotAuthorized = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-5 flex flex-col items-center text-center">
        <div>
          <h1 className="mb-2 text-4xl font-semibold">
            You are not authorized!
          </h1>
          <p className="mb-6 text-gray-600 text-xl">
            You do not have permission to view this page using the credentials
            that you have provided while login.
            <br />
            Please contact your site administrator.
          </p>
          <Link
            href="/"
            className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600"
          >
            Back to Home
          </Link>
        </div>
        {/* <Image
          width="450"
          height="450"
          alt="error-illustration"
          src={`/images/pages/girl-with-laptop.png`}
        /> */}
      </div>
    </div>
  );
};

export default NotAuthorized;

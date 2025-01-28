import React from "react";
import DateInput from "../component/DateInput";
import Image from "next/image";

const Dashboard: React.FC = () => {
  const profileSrc = ""; // Update this with a valid profile image URL if available

  return (
    <main className="container mx-auto p-4 bg-gray-100 text-black">
      <div className="mb-8 flex items-start gap-6 bg-white p-4 rounded-lg">
        <div className="h-32 w-32 overflow-hidden rounded-full">
          <Image
            src="/assets/profile.png" // Directly using profile.png
            alt="Profile"
            className="h-full w-full object-cover"
            width={50}
            height={50}
          />
        </div>
        <div className="flex flex-col gap-2 flex-grow">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-black">John D. Rockefeller</h1>
            <div className="text-xl font-semibold text-black">$7,500 mo.</div>
          </div>
          <div className="flex items-center gap-2">
            <code className="rounded bg-gray-100 px-2 py-1 text-black">&lt;/&gt;</code>
            <span className="text-gray-600">Senior AI Engineer</span>
          </div>
          <div className="flex gap-2">
            {["Java", "JavaScript", "Python"].map((skill) => (
              <span key={skill} className="rounded-full bg-white border border-gray-800 px-3 py-1 text-sm font-medium text-gray-800">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="m-4">
        <DateInput />
      </div>
      <div className=" h-40 mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4 text-center">
        {["Job type", "Hours worked", "Salary", "Bonus"].map((item) => (
          <div key={item} className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="text-sm font-medium text-gray-500">{item}</div>
          </div>
        ))}
      </div>

      <div className="mb-8 w-40">
        <div className="rounded-lg border bg-white p-4">
          <h2 className="mb-4 text-lg font-semibold text-gray-700">Payment history</h2>
          <div className="flex flex-col space-y-2 gap-1">
            {["01/04", "01/03", "01/02", "01/01"].map((date) => (
              <span key={date} className="text-black">{date}</span>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="min-h-[200px] rounded-lg border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-gray-700">Your notes</h2>
          {/* Notes content would go here */}
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
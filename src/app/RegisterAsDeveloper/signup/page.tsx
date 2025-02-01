"use client";

import Image from "next/image";

export default function Signup() {
  const handlePath = () => {
    '/Onboarding';
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center pb-4 px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="bg-blue-600 px-8 py-3 rounded-b-lg">
              <Image
                src={"/logo.png"}
                alt="LumioAI Logo"
                width={60}
                height={10}
                className="h-10 w-auto"
              />
            </div>
          </div>
          <div className="space-y-2 text-center">
            <h1 className="text-xl md:text-2xl font-semibold tracking-tight text-gray-800">
              Apply as a developer to join our top-tier talent network.
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              Connect with the best companies, build relationships and take off your career.
              <br />
              We are here to help you in each stage.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {/* LinkedIn Sign Up Button */}
          <button className="w-full bg-[#0077B5] text-white py-2 px-4 rounded-md hover:bg-[#006497] transition-colors text-sm md:text-base">
            Sign Up with LinkedIn
          </button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">Or</span>
            </div>
          </div>

          {/* Sign Up Form */}
          <form className="space-y-4" action={"/RegisterAsDeveloper/Onboarding"}>
            <input
              type="text"
              placeholder="Full name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
            />

            {/* Terms and Conditions */}
            <p className="text-xs text-gray-600">
              By submitting, you acknowledge and agree to LumioAI's{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
              .
            </p>

            {/* Join LumioAI Button */}
            <button
              type="submit"
              className="w-full bg-[#4F46E5] text-white py-2 px-4 rounded-md hover:bg-[#4338CA] transition-colors text-sm md:text-base"
            >
              Join LumioAI
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
"use client"
import { useRouter } from "next/navigation";
import React from "react";

const ContactForm: React.FC = () => {
  const router = useRouter();
  const handleSubmit = () =>{
    router.push("/ContactUs/SuccessPage")
  }
  return (
    <div className="w-full max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Contact us</h1>
      <form className="space-y-4" action={handleSubmit}>
        <textarea
          className="min-h-[200px] w-full p-3 border border-gray-300 rounded-lg resize-none"
          placeholder="Write your message here..."
        />
        <input
          type="email"
          placeholder="Your email"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
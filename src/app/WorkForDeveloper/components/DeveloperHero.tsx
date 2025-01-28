import React from "react";

export default function DeveloperHero() {
  return (
    <section className="relative min-h-screen">
      {/* Background with gradient and mesh pattern */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-amber-900"
        style={{
          backgroundImage: `
            linear-gradient(to bottom right, rgba(30,64,175,0.9), rgba(0,0,0,0.95), rgba(120,53,15,0.9)),
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-12">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white max-w-4xl">
            Developers are at the heart of LumioAI
          </h1>

          <p className="text-white text-justify text-xl max-w-3xl">
            We support our developers at every stage of their careers. We constantly monitor their performances and
            feedback to help them get better job opportunities. We make sure that their unique skills are matched
            accordingly.
          </p>

          <p className="text-white text-xl text-justify max-w-3xl">
            At LumioAI developers can work with the best companies, upgrade their resumes and build careers. With us,
            developers keep what they earn.
          </p>

          <button className="flex justify-center align-middle bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg">
            Apply as Developer
          </button>
        </div>
      </div>
    </section>
  );
}
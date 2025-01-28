import React from "react";
import Navbar from "@/app/RegisterAsDeveloper/components/Navbar";

interface Quiz {
  name: string;
  status: string;
  hasNotification: boolean;
}

interface Challenge {
  name: string;
  icon: string;
}

export default function VettingSystem() {
  const quizzes: Quiz[] = [
    { name: "Python", status: "COMPLETED", hasNotification: false },
    { name: "JavaScript", status: "START QUIZ", hasNotification: true },
    { name: "Angular", status: "START QUIZ", hasNotification: true },
    { name: "C++", status: "COMPLETED", hasNotification: false }
  ];

  const challenges: Challenge[] = [
    { name: "Coding Challenge", icon: "code" },
    { name: "Practical Challenge", icon: "practical" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="min-h-screen bg-[#F8F9FC]">
        <div className="max-w-6xl mx-auto p-6">
          {/* Header Section */}
          <div className="flex justify-between items-start mb-12">
            <div>
              <h1 className="text-xl font-medium text-black mb-1">
                Welcome to LumioAI vetting system
              </h1>
              <p className="text-sm text-gray-500">You can take tests anytime.</p>
            </div>
            <div className="relative w-16 h-16">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="3"
                  strokeDasharray="65, 100"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs text-black">65%</span>
              </div>
              <div className="text-center mt-1">
                <p className="text-[10px] text-black">Completed</p>
              </div>
            </div>
          </div>

          {/* Quizzes Section */}
          <section className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-black">Quizzes</h2>
              <button className="text-blue-600 text-xs">+Add Skills</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {quizzes.map((quiz, index) => (
                <div key={index} className="bg-white rounded-lg p-4 relative border border-gray-100">
                  {quiz.hasNotification && (
                    <div className="absolute top-3 right-3 w-2 h-2 bg-blue-500 rounded-full" />
                  )}
                  <div className="flex flex-col items-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pageeee-T1B7mlFIgqDImLjPJgLNbtgxUrIN8i.png"
                      alt={quiz.name}
                      className="w-12 h-12 mb-3"
                    />
                    <h3 className="text-sm font-medium text-black mb-1">{quiz.name}</h3>
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 mr-1" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                        <path d="M12 6v6l4 2" strokeWidth="2" />
                      </svg>
                      15 min
                    </div>
                    <button
                      className={`w-full text-xs py-1 rounded-full ${quiz.status === "COMPLETED"
                        ? "bg-gray-100 text-gray-600"
                        : "bg-blue-50 text-blue-600"
                        }`}
                    >
                      {quiz.status}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="h-px bg-gray-200 mt-8" />
          </section>

          {/* Technical Questions Section */}
          <section className="mb-12">
            <h2 className="text-lg font-semibold text-black mb-4">Technical Questions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 border border-gray-100">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 mb-3 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor">
                      <path d="M20 4H4v16h16V4z" strokeWidth="2" />
                      <path d="M4 8h16M8 4v16" strokeWidth="2" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-medium text-black mb-1">Frontend basics</h3>
                  <div className="flex items-center text-xs text-gray-500 mb-3">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 mr-1" fill="none" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      <path d="M12 6v6l4 2" strokeWidth="2" />
                    </svg>
                    20 min
                  </div>
                  <button className="w-full text-xs py-1 rounded-full bg-blue-50 text-blue-600">
                    START TEST
                  </button>
                </div>
              </div>
            </div>
            <div className="h-px bg-gray-200 mt-8" />
          </section>

          {/* Technical Challenges Section */}
          <section className="mb-12">
            <h2 className="text-lg font-semibold text-black mb-4">Technical Challenges</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {challenges.map((challenge, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-100">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 mb-3 flex items-center justify-center">
                      {challenge.icon === "code" ? (
                        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor">
                          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" strokeWidth="2" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor">
                          <circle cx="12" cy="12" r="3" strokeWidth="2" />
                          <path d="M19 12c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8" strokeWidth="2" />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-sm font-medium text-black mb-1">{challenge.name}</h3>
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 mr-1" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                        <path d="M12 6v6l4 2" strokeWidth="2" />
                      </svg>
                      25 min
                    </div>
                    <button className="w-full text-xs py-1 rounded-full bg-blue-50 text-blue-600">
                      START CHALLENGE
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="h-px bg-gray-200 mt-8" />
          </section>

          {/* Soft Skills Section */}
          <section className="mb-12">
            <h2 className="text-lg font-semibold text-black mb-4">Soft Skills</h2>
            {/* <div className="h-px bg-gray-200 mt-8" /> */}
          </section>

          {/* Notice Section */}
          <div className="flex justify-center mt-56">
            <div className="bg-white rounded-full p-4 border border-gray-100 max-w-2xl">
              <div className="flex gap-3">
                <span className="text-lg">⚠️</span>
                <div>
                  <p className="text-sm font-medium text-black mb-1">NOTICE</p>
                  <p className="text-xs text-gray-600">
                    Please thoroughly consult LumioAI policies about{" "}
                    <span className="underline">anti-cheating rules and measures</span>
                    <br />
                    A disqualification during test may result in a 3 months ban.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
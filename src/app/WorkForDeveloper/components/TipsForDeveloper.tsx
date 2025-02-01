import React from "react";
import TipCard from "./TipCard";
import Link from "next/link";

const TipsForDeveloper: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-black mb-12 text-center">
          Here are some tips for developers to guide you on your journey with LumioAI
        </h2>

        <div className="space-y-12 max-w-4xl mx-auto">
          <div className="flex justify-start">
            <div className="w-full md:w-2/3">
              <TipCard title="Stay Curious and Keep Learning">
                <li>
                  The field of AI and software development is constantly evolving. Stay curious and invest time in
                  continuous learning through online courses, certifications, and workshops.
                </li>
                <li>
                  Don't be afraid to explore and experiment with new technologies and frameworks. This will broaden your
                  skill set and keep you ahead of the curve.
                </li>
              </TipCard>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="w-full md:w-2/3">
              <TipCard title="Master the Basics: be so valuable they can't replace you">
                <li>
                  Ensure you have a strong understanding of fundamental concepts in computer science, programming, and
                  algorithms. A solid foundation is crucial for tackling complex problems.
                </li>
                <li>
                  Master core programming languages relevant to your field, such as Python for AI and machine learning,
                  and languages like Java, C++, or JavaScript for software development.
                </li>
              </TipCard>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="w-full md:w-2/3">
              <TipCard title="Build a Portfolio">
                <li>
                  Create high-quality code in your best projects. Include detailed descriptions, technologies used, and
                  your contributions. This is essential for demonstrating your skills to potential employers.
                </li>
                <li>
                  Participate in open-source projects. It's a great way to collaborate with other developers, learn from
                  the community, and build your reputation.
                </li>
              </TipCard>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="w-full md:w-2/3">
              <TipCard title="Practice Problem-Solving">
                <li>
                  Regularly practice coding challenges. This sharpens your problem-solving skills and prepares you for
                  technical interviews.
                </li>
                <li>
                  Participate in coding competitions and hackathons. These events provide opportunities to solve
                  real-world problems and showcase your skills.
                </li>
              </TipCard>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="w-full md:w-2/3">
              <TipCard title="Collaborate and Network">
                <li>
                  Engage with developer communities on different platforms. Networking with peers can lead to new
                  opportunities and insights.
                </li>
                <li>
                  Participate in industry conferences, hackathons, and local meetups. These events are great for
                  learning, networking, and staying updated with industry trends.
                </li>
              </TipCard>
            </div>
          </div>

          <div className="flex justify-center">
            <Link href={"/RegisterAsDeveloper/signup"} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 no-underline my-10 text-lg rounded-lg">
              Apply as Developer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TipsForDeveloper;
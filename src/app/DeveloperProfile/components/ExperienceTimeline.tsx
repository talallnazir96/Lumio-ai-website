"use client"

// Sample experience data
const experiences = [
  {
    company: "Bourbon Group ICP",
    period: "2018 - 2020",
    role: "Full-stack engineer",
    description: "Integrated something into something that was very complex.",
    skills: ["python", "html", "google-cloud"],
    logo: "/assets/icon1.png",
  },
  {
    company: "GCO Pillars",
    period: "2020 - 2022",
    role: "Python developer",
    description: "Implemented a new approach that blew everyone's minds.",
    skills: ["python"],
    logo: "/assets/icon2.png",
  },
  {
    company: "Weimar Republic",
    period: "2022 - 2023",
    role: "Angular developer",
    description: "Did wonderful things.",
    skills: ["angular"],
    logo: "/assets/icon3.png",
  },
]

export default function ExperienceTimeline() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-20 bg-white rounded-lg">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

        {/* Experience items */}
        {experiences.map((experience, index) => (
          <div key={index} className="relative flex gap-6 pb-12 last:pb-0">
            {/* Logo */}
            <div className="relative z-10">
              <div className="w-16 h-16  bg-white border-gray-200 overflow-hidden flex items-center justify-center">
                <img
                  src={experience.logo || "/placeholder.svg"}
                  alt={`${experience.company} logo`}
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>

            </div>

            {/* Content */}
            <div className="flex-1 pt-1.5">
              <div className="flex items-center justify-between mb-1">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{experience.company} <span className="text-sm text-gray-500 ml-2">{experience.period}</span></h3>
                  <p className="text-sm text-gray-500">{experience.role}</p>
                </div>
                <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 ml-2">Skill Used:</span>

                  {experience.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-flex items-center justify-center w-6 h-6 bg-gray-100 rounded"
                    >
                      <img
                        src={`/assets/python.png`}
                        alt={skill}
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


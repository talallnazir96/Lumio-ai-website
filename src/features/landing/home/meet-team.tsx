"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { motion } from "framer-motion"
import Link from "next/link"
// import './MeetTeamCustom.css'

const teamMembers = [
  {
    name: "Ruben Bartosz",
    image: "/assets/img/team1.jpg",
    certification: "LumioAI certified",
    role: "AI/ML Engineer",
    experience: "8+ years experience",
    expertise: ["React.js", "Python", "SQL", "Java"]
  },
  {
    name: "Ruben Bartosz",
    image: "/assets/img/team1.jpg",
    certification: "LumioAI certified",
    role: "AI/ML Engineer",
    experience: "8+ years experience",
    expertise: ["React.js", "Python", "SQL", "Java"]
  },
  {
    name: "Hector Vasileiou",
    image: "/assets/img/team2.jpg",
    certification: "LumioAI certified",
    role: "AI/ML Engineer",
    experience: "8+ years experience",
    expertise: ["React.js", "Python", "SQL", "Java"]
  },
  {
    name: "Hector Vasileiou",
    image: "/assets/img/team2.jpg",
    certification: "LumioAI certified",
    role: "AI/ML Engineer",
    experience: "8+ years experience",
    expertise: ["React.js", "Python", "SQL", "Java"]
  },
  {
    name: "Anup Malani",
    image: "/assets/img/team3.jpg",
    certification: "LumioAI certified",
    role: "AI/ML Engineer",
    experience: "8+ years experience",
    expertise: ["React.js", "Python", "SQL", "Java"]
  },
  {
    name: "Anup Malani",
    image: "/assets/img/team3.jpg",
    certification: "LumioAI certified",
    role: "AI/ML Engineer",
    experience: "8+ years experience",
    expertise: ["React.js", "Python", "SQL", "Java"]
  },
  {
    name: "Anup Malani",
    image: "/assets/img/team3.jpg",
    certification: "LumioAI certified",
    role: "AI/ML Engineer",
    experience: "8+ years experience",
    expertise: ["React.js", "Python", "SQL", "Java"]
  },
  {
    name: "Anup Malani",
    image: "/assets/img/team3.jpg",
    certification: "LumioAI certified",
    role: "AI/ML Engineer",
    experience: "8+ years experience",
    expertise: ["React.js", "Python", "SQL", "Java"]
  }
]

const MeetTeam = () => {
  return (
    <>
      <section
        className="meetTeam relative min-h-screen bg-white"
        style={{
          backgroundImage: `url('/assets/floor.png')`,
          backgroundSize: "contain",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          paddingBottom: "200px",
        }}
      >
        <div className="container">
          <div className="col-lg-12">
            <motion.div
              className="rounded-full text-center ai-hover"
              onMouseMove={(e) => {
                const card = e.currentTarget
                const rect = card.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top

                // Apply the smog effect with the same gradient colors
                card.style.background = `
                radial-gradient(circle at ${x}px ${y}px, rgba(0, 0, 0, 0.2), transparent 70%), 
                linear-gradient(90deg, #6a11cb, #8e9cf7)`
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget
                // Reset to the default gradient
                card.style.background = "linear-gradient(90deg, #6a11cb, #8e9cf7)"
              }}
            >
              <h2 className="mb-0 font-semibold text-2xl text-white">Meet our certified developers</h2>
            </motion.div>
          </div>

          <div className="col-lg-12 mt-5">
            <div className="swiper mySwiper">
              <div className="swiper-wrapper">
                <Carousel className="relative -mb-[5rem]">
                  <CarouselContent>
                    {teamMembers.map((member, index) => (
                      <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/4">
                        <div className="swiper-slide">
                          <div className="teamcard">
                            <img src={member.image} alt={member.name} />
                            <div className="px-2 py-2">
                              <h5>{member.name}</h5>
                              <div className="d-flex gap-2 align-items-center">
                                <img src="/assets/img/certified.svg" className="certified" alt="certified" />
                                <h4 className="mb-0">
                                  <strong>{member.certification}</strong>
                                </h4>
                              </div>
                              <ul className="mb-0 ps-0 mt-2">
                                <li>{member.role}</li>
                                <li>{member.experience}</li>
                              </ul>
                              <p className="mt-2">Expertise:</p>
                              <div className="expertise">
                                {member.expertise.map((skill, skillIndex) => (
                                  <div key={skillIndex} className={`skills ${skillIndex % 2 === 0 ? 'greenish' : 'black'} mr-1`}>{skill}</div>
                                ))}
                              </div>
                            </div>
                            <Link href="/ClientSeeDeveloperProfile" className=" btnstyle1">
                              View full profile
                            </Link>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="carousel-arrow left-0 bg-black text-white lg:-ml-10" />
                  <CarouselNext className="carousel-arrow right-0 bg-black text-white lg:-mr-10" />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .topHeading {
            padding: 20px;
            margin: 20px 0;
        }

        .topcard {
            background: linear-gradient(90deg, #6a11cb, #8e9cf7); /* Default gradient */
            color: white;
            padding: 30px 20px;
            border-radius: 20px;
            transition: background 0.3s ease, transform 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .topcard:hover {
            transform: scale(1.02); /* Subtle zoom effect on hover */
        }

        .mb-0 {
            margin-bottom: 0;
            font-size: 2rem;
            font-weight: bold;
            line-height: 1.4;
        }

        @media (max-width: 768px) {
            .mb-0 {
                font-size: 1.5rem;
            }
        }

        .meetTeam {
          position: relative;
          overflow: hidden;
        }

        .meetTeam::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 200px; /* Adjust based on your needs */
          background-image: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0.5)
          );
          pointer-events: none;
        }

        .teamcard {
          background: white;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .teamcard:hover {
          transform: translateY(-10px);
        }

        .teamcard img {
          width: 100%;
          height: auto;
        }

        .viewprofile {
          display: block;
          text-align: center;
          padding: 10px 0;
          color: #6a11cb;
          font-weight: bold;
          transition: color 0.3s ease;
        }

        .viewprofile:hover {
          color: #8e9cf7;
        }

        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
        }

        .carousel-arrow.left-0 {
          left: -12px;
        }

        .carousel-arrow.right-0 {
          right: -12px;
        }
      `}</style>
    </>
  )
}

export default MeetTeam
"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { motion } from "framer-motion"

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
              className="topcard text-center ai-hover"
              onMouseMove={(e) => {
                const card = e.currentTarget
                const rect = card.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top

                // Apply the smog effect with the same gradient colors
                card.style.background = `
                radial-gradient(circle at ${x}px ${y}px, rgba(0, 0, 0, 0.2), transparent 60%), 
                linear-gradient(90deg, #6a11cb, #8e9cf7)`
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget
                // Reset to the default gradient
                card.style.background = "linear-gradient(90deg, #6a11cb, #8e9cf7)"
              }}
            >
              <h2 className="mb-0 text-white">Meet our certified developers</h2>
            </motion.div>
          </div>

          <div className="col-lg-12 mt-5">
            <div className="swiper mySwiper">
              <div className="swiper-wrapper">
                <Carousel className="relative -mb-[5rem]">
                  <CarouselContent>
                    <CarouselItem className="basis-1/5">
                      <div className="swiper-slide">
                        <div className="teamcard">
                          <img src="/assets/img/team1.jpg" alt="team1" />
                          <div className="px-2 py-2">
                            <h5>Ruben Bartosz</h5>
                            <div className="d-flex gap-2 align-items-center">
                              <img src="/assets/img/certified.svg" className="certified" alt="certified" />
                              <h4 className="mb-0">
                                <strong>LumioAI</strong> certified
                              </h4>
                            </div>
                            <ul className="mb-0 ps-0 mt-2">
                              <li>AI/ML Engineer</li>
                              <li>8+ years experience</li>
                            </ul>
                            <p className="mt-2">Expertise:</p>
                            <div className="expertise">
                              <div className="skills greenish mr-1">React.js</div>
                              <div className="skills greenish">Python</div>
                              <div className="skills black mr-1">SQL</div>
                              <div className="skills black">Java</div>
                            </div>
                          </div>
                          <a href="#" className="viewprofile">
                            View full profile
                          </a>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/5">
                      <div className="swiper-slide">
                        <div className="teamcard">
                          <img src="/assets/img/team2.jpg" alt="team1" />
                          <div className="px-2 py-2">
                            <h5>Hector Vasileiou</h5>
                            <div className="d-flex gap-2 align-items-center">
                              <img src="/assets/img/certified.svg" className="certified" alt="certified" />
                              <h4 className="mb-0">
                                <strong>LumioAI</strong> certified
                              </h4>
                            </div>
                            <ul className="mb-0 ps-0 mt-2">
                              <li>AI/ML Engineer</li>
                              <li>8+ years experience</li>
                            </ul>
                            <p className="mt-2">Expertise:</p>
                            <div className="expertise">
                              <div className="skills greenish mr-1">React.js</div>
                              <div className="skills greenish">Python</div>
                              <div className="skills black mr-1">SQL</div>
                              <div className="skills black">Java</div>
                            </div>
                          </div>
                          <a href="#" className="viewprofile">
                            View full profile
                          </a>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/5">
                      <div className="swiper-slide">
                        <div className="teamcard">
                          <img src="/assets/img/team3.jpg" alt="team1" />
                          <div className="px-2 py-2">
                            <h5>Anup Malani</h5>
                            <div className="d-flex gap-2 align-items-center">
                              <img src="/assets/img/certified.svg" className="certified" alt="certified" />
                              <h4 className="mb-0">
                                <strong>LumioAI</strong> certified
                              </h4>
                            </div>
                            <ul className="mb-0 ps-0 mt-2">
                              <li>AI/ML Engineer</li>
                              <li>8+ years experience</li>
                            </ul>
                            <p className="mt-2">Expertise:</p>
                            <div className="expertise">
                              <div className="skills greenish mr-1">React.js</div>
                              <div className="skills greenish">Python</div>
                              <div className="skills black mr-1">SQL</div>
                              <div className="skills black">Java</div>
                            </div>
                          </div>
                          <a href="#" className="viewprofile">
                            View full profile
                          </a>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/5">
                      <div className="swiper-slide">
                        <div className="teamcard">
                          <img src="/assets/img/team1.jpg" alt="team1" />
                          <div className="px-2 py-2">
                            <h5>Ruben Bartosz</h5>
                            <div className="d-flex gap-2 align-items-center">
                              <img src="/assets/img/certified.svg" className="certified" alt="certified" />
                              <h4 className="mb-0">
                                <strong>LumioAI</strong> certified
                              </h4>
                            </div>
                            <ul className="mb-0 ps-0 mt-2">
                              <li>AI/ML Engineer</li>
                              <li>8+ years experience</li>
                            </ul>
                            <p className="mt-2">Expertise:</p>
                            <div className="expertise">
                              <div className="skills greenish mr-1">React.js</div>
                              <div className="skills greenish">Python</div>
                              <div className="skills black mr-1">SQL</div>
                              <div className="skills black">Java</div>
                            </div>
                          </div>
                          <a href="#" className="viewprofile">
                            View full profile
                          </a>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/5">
                      <div className="swiper-slide">
                        <div className="teamcard">
                          <img src="/assets/img/team2.jpg" alt="team1" />
                          <div className="px-2 py-2">
                            <h5>Ruben Bartosz</h5>
                            <div className="d-flex gap-2 align-items-center">
                              <img src="/assets/img/certified.svg" className="certified" alt="certified" />
                              <h4 className="mb-0">
                                <strong>LumioAI</strong> certified
                              </h4>
                            </div>
                            <ul className="mb-0 ps-0 mt-2">
                              <li>AI/ML Engineer</li>
                              <li>8+ years experience</li>
                            </ul>
                            <p className="mt-2">Expertise:</p>
                            <div className="expertise">
                              <div className="skills greenish mr-1">React.js</div>
                              <div className="skills greenish">Python</div>
                              <div className="skills black mr-1">SQL</div>
                              <div className="skills black">Java</div>
                            </div>
                          </div>
                          <a href="#" className="viewprofile">
                            View full profile
                          </a>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/5">
                      <div className="swiper-slide">
                        <div className="teamcard">
                          <img src="/assets/img/team3.jpg" alt="team1" />
                          <div className="px-2 py-2">
                            <h5>Anup Malani</h5>
                            <div className="d-flex gap-2 align-items-center">
                              <img src="/assets/img/certified.svg" className="certified" alt="certified" />
                              <h4 className="mb-0">
                                <strong>LumioAI</strong> certified
                              </h4>
                            </div>
                            <ul className="mb-0 ps-0 mt-2">
                              <li>AI/ML Engineer</li>
                              <li>8+ years experience</li>
                            </ul>
                            <p className="mt-2">Expertise:</p>
                            <div className="expertise">
                              <div className="skills greenish mr-1">React.js</div>
                              <div className="skills greenish">Python</div>
                              <div className="skills black mr-1">SQL</div>
                              <div className="skills black">Java</div>
                            </div>
                          </div>
                          <a href="#" className="viewprofile">
                            View full profile
                          </a>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/5">
                      <div className="swiper-slide">
                        <div className="teamcard">
                          <img src="/assets/img/team1.jpg" alt="team1" />
                          <div className="px-2 py-2">
                            <h5>Ruben Bartosz</h5>
                            <div className="d-flex gap-2 align-items-center">
                              <img src="/assets/img/certified.svg" className="certified" alt="certified" />
                              <h4 className="mb-0">
                                <strong>LumioAI</strong> certified
                              </h4>
                            </div>
                            <ul className="mb-0 ps-0 mt-2">
                              <li>AI/ML Engineer</li>
                              <li>8+ years experience</li>
                            </ul>
                            <p className="mt-2">Expertise:</p>
                            <div className="expertise">
                              <div className="skills greenish mr-1">React.js</div>
                              <div className="skills greenish">Python</div>
                              <div className="skills black mr-1">SQL</div>
                              <div className="skills black">Java</div>
                            </div>
                          </div>
                          <a href="#" className="viewprofile">
                            View full profile
                          </a>
                        </div>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="absolute -left-12 top-1/2 transform -translate-y-1/2" />
                  <CarouselNext className="absolute -right-12 top-1/2 transform -translate-y-1/2" />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
;<style jsx>{`
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
`}</style>

export default MeetTeam


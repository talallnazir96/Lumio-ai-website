"use client"
import { useRouter } from "next/navigation";
import Footer from "@/features/landing/components/footer";
import Navbar from "@/features/landing/components/navbar";

const Register = () => {
    const router = useRouter();
    const handleSubmit = () =>{
        router.push("/RegisterAsDeveloper/Onboarding")
    }
    return <>
    <Navbar />
        <section className="bannersection innerbanner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bannerheading w-90 m-auto">
                            <h1>
                                Apply as a developer to join our top-tier talent network.
                            </h1>
                            <h5>Connect with the best companies, build relationships and take off your career. We are
                                here to help you in each stage.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="customform">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 m-auto text-center">
                        <a href="#" className="formbtn">Sign Up with LinkedIn</a>
                        <span className="py-4 d-block">or</span>
                        <form action={handleSubmit} className="text-center">
                            <input type="text" name="fullname" placeholder="Full Name"/>
                            <input type="text" name="email" placeholder="Email"/>
                            <input type="password" name="password" placeholder="Password"/>
                            <input type="password" name="Confirm Password" placeholder="Password"/>
                            <input type="text" name="number" placeholder="Phone Number"/>
                            <label htmlFor="">By submitting, you acknowledge and agree to LumioAI’s <a href="#">Terms
                                and Conditions</a> and <a href="#">Privacy Policy</a>.</label>
                            <input type="submit" name="submit" value="Join LumioAI"/>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
}

export default Register
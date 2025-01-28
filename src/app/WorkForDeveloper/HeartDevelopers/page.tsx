import React from "react";
import DeveloperHero from "../components/DeveloperHero";
import TipsForDeveloper from "../components/TipsForDeveloper";
import Footer from "@/features/landing/components/footer";


const HeartDevelopers: React.FC = () => {
  return (
    <main>
      <DeveloperHero />
      <TipsForDeveloper />
      <Footer />
    </main>
  );
};

export default HeartDevelopers;
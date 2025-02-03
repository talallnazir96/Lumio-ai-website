import HomeBanner from "@/features/landing/home/banner";
import LumioSection from "@/features/landing/home/lumio-section";
import ServiceSection from "@/features/landing/home/service-section";
import StepSection from "@/features/landing/home/step-section";
import StataticsSection from "@/features/landing/home/statatics-section";
import HireManager from "@/features/landing/home/hire-manager";
import MeetTeam from "@/features/landing/home/meet-team";
import GetStarted from "@/features/landing/home/get-started";
import WhatExpected from "@/features/landing/home/what-expected";
import WeValue from "@/features/landing/home/we-value";
import LumioAi from "@/features/landing/home/lumio-ai";
import NetworkSection from "@/features/landing/home/network-section";
import WeHire from "@/features/landing/home/we-hire";
import BookDemo from "@/features/landing/home/book-demo";
import Skills from "@/features/landing/home/skills";
import MapView from "@/features/landing/home/map-view";
import Footer from "@/features/landing/components/footer";
import Navbar from "@/features/landing/components/navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <HomeBanner />
            <LumioSection />
            <ServiceSection />
            <StepSection />
            <StataticsSection />
            <HireManager />
            <MeetTeam />
            <MapView />
            <Skills />
            <BookDemo />
            <WeHire />
            <NetworkSection />
            <LumioAi />
            <WeValue />
            <WhatExpected />
            <GetStarted />
            <Footer />
        </>
    );
}

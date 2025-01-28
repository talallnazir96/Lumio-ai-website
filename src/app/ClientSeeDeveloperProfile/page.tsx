import Header from "../ClientGetStarted/components/Header";
import { PerformanceSummary } from "./component/PerformanceSummary";
import { ProfileHeader } from "./component/ProfileHeader";

export default function Page() {
  return (
    <>
      <Header />
      <div className="bg-white text-black">
        <div className="bg-white text-black max-w-5xl mx-auto">
          <ProfileHeader />
          <PerformanceSummary />
        </div>
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-2 my-10 text-lg rounded-lg">
            Hire John
          </button>
        </div>
      </div>
    </>
  );
}
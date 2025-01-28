import React from "react";
import { DevCard } from "../../component/DevCard";

const AppearsUser: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-2xl">
        <h1 className="mb-8 text-center text-xl font-semibold text-gray-900">
          Design for developer&apos;s tab when it appears in &quot;Search talent&quot; page
        </h1>
        <DevCard
          name="J.D."
          title="Senior AI Engineer"
          experience="5+ years of experience"
          location="United States"
          rate="$7,500 mo."
          verified={true}
          expertise={[
            { icon: "💻", label: "JavaScript" },
            { icon: "🐍", label: "Python" },
            { icon: "⚛️", label: "React" },
          ]}
          avatarUrl={"/assets/profile.png"}
        />
      </div>
    </div>
  );
}

export default AppearsUser;
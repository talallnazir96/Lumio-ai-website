import React from "react";
import Nav3 from "../component/Nav3";
import Image from "next/image";

const EmptyDeveloper: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-xl font-semibold mb-8">You haven't hired developers yet</h1>
          <Image
            src={"/assets/z-image-1.svg"}
            alt="No developers illustration"
            className="mx-auto mb-8"
            width={350}  // Adjusted width
            height={350} // Adjusted height
          />
        </div>
      </main>
    </div>
  );
}

export default EmptyDeveloper;
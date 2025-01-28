import React from "react";

interface TipCardProps {
  title: string;
  children: React.ReactNode;
  variant?: "purple" | "dark" | "default";
}

const TipCard: React.FC<TipCardProps> = ({ title, children, variant = "default" }) => {
  const variants = {
    purple: "border-purple-500 bg-purple-900",
    dark: "border-gray-800 bg-black",
    default: "border-gray-700 bg-black",
  };

  return (
    <div className={`rounded-xl border ${variants[variant]} p-6 space-y-4`}>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <ul className="space-y-3 list-disc list-inside text-white">{children}</ul>
    </div>
  );
};

export default TipCard;
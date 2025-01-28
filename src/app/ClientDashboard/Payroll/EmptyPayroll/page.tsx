import React from "react";
import Image from "next/image";

const EmptyPayroll: React.FC = () => {
  const monthlyAmount: number = 0;
  return (
    <div className="w-full max-w-6xl mx-auto py-6 bg-gray-100">
      <div className="bg-gray-100 rounded-lg py-6">
        <div className="flex items-center justify-center gap-4 mb-8 bg-white p-4 rounded-lg shadow-md">
          <Image src="/assets/111.svg" alt="Payroll Icon" width={100} height={100} />
          <div className="text-center">
            <div className="text-lg text-gray-600">Monthly Payroll</div>
            <div className="text-xl font-semibold">
              ${monthlyAmount.toLocaleString()}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-sm text-gray-500 text-center mb-4">
            No active payroll found
          </p>
          <Image src="/assets/z-image-2.svg" alt="Payroll Icon" width={300} height={300} />
        </div>
      </div>
    </div>
  );
}

export default EmptyPayroll;
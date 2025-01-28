import React from "react";
import Image from "next/image";

interface Payment {
  invoiceName: string;
  date: string;
  status: string;
}

const MonthlyPayroll: React.FC = () => {
  const monthlyAmount: number = 5700;
  const paymentHistory: Payment[] = [
    { invoiceName: "Invoice name", date: "05 June, 2024", status: "Completed" },
    { invoiceName: "Invoice name", date: "05 May, 2024", status: "Completed" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-6 bg-gray-100">
      <div className="bg-gray-100 rounded-lg py-6">
        <p className="text-sm text-gray-500 text-center mb-4">
          Payroll management is on autopilot
        </p>
        <div className="flex items-center justify-center gap-4 mb-8 bg-white p-4 rounded-lg shadow-md">
          <Image src="/assets/111.svg" alt="Payroll Icon" width={100} height={100} />
          <div className="text-center">
            <div className="text-lg text-gray-600">Monthly Payroll</div>
            <div className="text-xl font-semibold">
              ${monthlyAmount.toLocaleString()}
            </div>
          </div>
        </div>

        <div className="w-full px-4">
          <h2 className="text-lg font-medium mb-4">Payment History</h2>
          <div className="overflow-x-auto">
            <table className="w-full rounded-lg">
              <thead>
                <tr className="bg-blue-100 rounded-lg">
                  <th className=" text-left py-3 px-4 text-sm font-medium text-gray-600">
                    Invoice
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                    Date
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                    Status
                  </th>
                  <th className=" text-right py-3 px-4 text-sm font-medium text-gray-600">
                    Download
                  </th>
                </tr>
              </thead>
              <tbody className=" bg-white">
                {paymentHistory.map((payment, index) => (
                  <tr key={index} className="border-t">
                    <td className="py-3 px-4 text-sm">{payment.invoiceName}</td>
                    <td className="py-3 px-4 text-sm">{payment.date}</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        {payment.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button className="text-sm text-gray-600 hover:text-gray-900">
                        ↓ Download PDF
                      </button>
                    </td>
                  </tr>
                ))}
                {/* Empty rows */}
                {[...Array(3)].map((_, index) => (
                  <tr key={`empty-${index}`} className="border-t">
                    <td className="py-3 px-4 text-sm">&nbsp;</td>
                    <td className="py-3 px-4 text-sm">&nbsp;</td>
                    <td className="py-3 px-4 text-sm">&nbsp;</td>
                    <td className="py-3 px-4 text-sm text-right">&nbsp;</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyPayroll;
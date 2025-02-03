"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface SidebarItem {
  title: string;
  icon: string;
  href: string;
}

// Sidebar items array
const sidebarItems: SidebarItem[] = [
  {
    title: "Dashboard",
    icon: '/dashboard.png',
    href: "/ClientDashboard/Dashboard",
  },
  {
    title: "Search talent",
    icon: '/search.png',
    href: "/ClientDashboard/SearchTalent",
  },
  {
    title: "My hires",
    icon: '/hire.png',
    href: "/ClientDashboard/MyHire",
  },
  {
    title: "Payroll",
    icon: '/payRoll.png',
    href: "/ClientDashboard/Payroll/MonthlyPayroll",
  },
  {
    title: "Options",
    icon: '/opt.png',
    href: "/ClientDashboard/Options",
  },
];

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu className="h-6 w-6" />
      </button>
      <aside className={`fixed left-0 top-0 z-30 h-full w-56 border-r bg-white transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform duration-300`}>
        <div className="flex h-full flex-col">
          <div className="flex h-14 items-center justify-center border-b px-4 ">
            <Link href="/ClientDashboard/Dashboard" className="flex items-center gap-2 no-underline text-black">
              <div className="flex items-center justify-center">
                <Image src="/logo.svg" alt="LumioAI Logo" width={64} height={64} />
                <h1 className="text-3xl">Lumio</h1>
              </div>
            </Link>
          </div>
          <div className="flex flex-1 flex-col gap-2 p-4">
            <nav className="flex flex-1 flex-col gap-2">
              {sidebarItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${pathname === item.href ? "bg-gray-100 text-black" : "text-gray-600 hover:bg-gray-50 hover:text-black"
                    } no-underline`}
                >
                  <Image src={item.icon} alt={item.title} width={24} height={24} />
                  {item.title}
                </Link>
              ))}
            </nav>
            <div className="border-t pt-4">
              <div className="flex flex-col gap-2">
                <button className="w-full bg-green-400 rounded-full border border-gray-30 px-2 py-1 text-sm font-medium text-gray-700 hover:bg-green-500 no-underline">
                  Support
                </button>
                <button className="text-sm font-medium text-blue-600 no-underline"><Link href={"/faq"}>See FAQ</Link></button>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
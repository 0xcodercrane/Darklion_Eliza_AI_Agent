"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("dashboard");

  const navItems = [
    {
      name: "Live Agents",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
          />
        </svg>
      ),
      id: "liveagents",
      href: "/",
    },
    {
      name: "Deploy",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
      id: "deploy",
      href: "/deploy",
    },
  ];

  return (
    <div className="relative h-full border-r border-gray-700">
      <aside
        className={`flex h-full ${
          isSidebarOpen ? "w-64" : "w-16"
        } flex-col bg-gray-800 text-white transition-all duration-300`}
      >
        <div className="p-4 flex gap-4 items-center overflow-hidden h-[74px]">
          <div className=" rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="https://cdn.discordapp.com/icons/1324428871646314586/0c6e1be4c34834929e589501318afc24.webp?size=96"
              alt="logo"
              width={42}
              height={42}
            />
          </div>
          <h2 className={`text-xl font-bold ${!isSidebarOpen && "hidden"}`}>
            Dark Lionel
          </h2>
        </div>
        <hr className="border-gray-700" />
        <nav className="flex-1">
          <ul className="space-y-2 p-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-3 rounded p-2 hover:bg-gray-700 ${
                    activeSection === item.id ? "bg-gray-700" : ""
                  }`}
                >
                  <div className="flex-shrink-0 w-6 h-6">{item.icon}</div>
                  <span className={`${!isSidebarOpen && "hidden"}`}>
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Toggle Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute -right-3 top-4 rounded-full bg-gray-800 p-1 text-white border border-gray-700"
          aria-label="Toggle Sidebar"
        >
          <svg
            className={`h-5 w-5 transform transition-transform ${
              isSidebarOpen ? "" : "rotate-180"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </aside>
    </div>
  );
}

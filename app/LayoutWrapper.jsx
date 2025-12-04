"use client";

import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <div className={`min-h-screen flex flex-col `}>
      <Toaster position="top-center" />

      {!isAdminRoute && <Navbar />}

      <main className="grow">{children}</main>

      {!isAdminRoute && <Footer />}
    </div>
  );
}

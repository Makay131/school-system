import { Logo } from "@/components/dashboard/Logo";
import { Menu } from "@/components/dashboard/Menu";
import Navbar from "@/components/dashboard/Navbar";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
            <Logo />
            <Menu />
        </div>
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#f7f8fa] overflow-scroll">
            <Navbar />
            {children}
        </div>
    </div>
  );
}

import Logo from "@/components/Logo";
import { ThemeModeToggle } from "@/components/theme-mode-toggle";
import { Separator } from "@/components/ui/separator";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full h-screen">
      {children}
      <Separator />

      <footer className="flex items-center justify-between p-2">
        <Logo iconSize={16} fontSize="text-sm" />
        <ThemeModeToggle />
      </footer>
    </div>
  );
};

export default Layout;

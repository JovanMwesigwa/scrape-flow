import BreadCrumpHeader from "@/components/breadcrump-header";
import DesktopSidebar, { MobileSidebar } from "@/components/DesktopSidebar";
import { ThemeModeToggle } from "@/components/theme-mode-toggle";
import { Separator } from "@/components/ui/separator";
import { SignedIn, UserButton } from "@clerk/nextjs";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex ">
      <MobileSidebar />
      <DesktopSidebar />
      <div className="flex flex-col flex-1 min-h-screen">
        <header className="flex items-center justify-between px-6 py-4 h-[50px] container">
          <BreadCrumpHeader />

          <div className="flex items-center gap-2">
            <ThemeModeToggle />

            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>
        <Separator />

        <div className="overflow-auto "></div>
        <div className="flex-1 container p-4 text-accent-foreground">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";
import NavItems from "./NavItems";

export const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src={"/assets/icons/menu.svg"}
            alt="Menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <Image
            src={"/assets/images/logo.svg"}
            alt="Logo"
            width={128}
            height={38}
          />
          <Separator className="border border-green-50" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

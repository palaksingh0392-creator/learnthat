import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <header className="w-full border-b bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* 1. LOGO SECTION */}
          <div className="flex items-center">
            <a
              href="/"
              className="text-3xl font-bold tracking-tighter text-grey-600"
            >
              Learnthat
            </a>
          </div>

          {/* 2. NAVIGATION LINKS */}
          <nav className="hidden md:block">
            <Menubar className="border-none bg-transparent shadow-none">
              <MenubarMenu>
                <MenubarTrigger className="cursor-pointer text-slate-600 hover:text-blue-600">
                  Home
                </MenubarTrigger>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger className="cursor-pointer text-slate-600 hover:text-blue-600">
                  <Link href="/">Courses</Link>
                </MenubarTrigger>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger className="cursor-pointer text-slate-600 hover:text-blue-600">
                  Notes
                </MenubarTrigger>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger className="cursor-pointer text-slate-600 hover:text-blue-600">
                  Tutorials
                </MenubarTrigger>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger className="cursor-pointer text-slate-600 hover:text-blue-600">
                  Contact
                </MenubarTrigger>
              </MenubarMenu>
            </Menubar>
          </nav>

          {/* 3. CALL TO ACTION */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Sign in
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md">
              Get Started
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}

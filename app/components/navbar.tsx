import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
export default function Navbar() {
  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full border-b bg-background/80 backdrop-blur-md transition-colors duration-300">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* 1. LOGO SECTION */}
          <div className="flex items-center">
            <a
              href="/"
              className="text-3xl font-bold tracking-tighter text-dark"
            >
              LearnWithPalak
            </a>
          </div>

          {/* 2. NAVIGATION LINKS */}
          <nav className="hidden md:block">
            <Menubar className="border-none bg-transparent shadow-none">
              <MenubarMenu>
                <MenubarTrigger className="cursor-pointer text-dark hover:text-blue-600">
                  <Link href="/"> Home</Link>
                </MenubarTrigger>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger className="cursor-pointer text-dark hover:text-blue-600">
                  <Link href="/course">Courses</Link>
                </MenubarTrigger>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger className="cursor-pointer text-dark hover:text-blue-600">
                  <Link href="/notes"> Notes</Link>
                </MenubarTrigger>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger className="cursor-pointer text-dark hover:text-blue-600">
                  <Link href="/tutorials"> Tutorials</Link>
                </MenubarTrigger>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger className="cursor-pointer text-dark hover:text-blue-600">
                  <Link href="/contact">Contact</Link>
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
            <AnimatedThemeToggler />
          </div>
        </div>
      </header>
    </>
  );
}

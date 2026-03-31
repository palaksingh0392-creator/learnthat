import Footer from "./components/footer";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Learnthat",
  description: "Best learning platform",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

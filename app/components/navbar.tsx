import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="bg-amber-50 p-3 ">
        <div className="flex flex-row p-2 pl-3 ">
          <div className="logo basis-1/3">
            <h1 className="text-3xl text-black font-serif ml-4 font-bold">
              Learnthat
            </h1>
          </div>
          <div className="links basis-2/3">
            <ul className="text-black flex flex-row gap-12 pt-2 font-sans text-l font-medium ">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">Courses</Link>
              </li>
              <li>
                <Link href="#">Tutorials</Link>
              </li>
              <li>
                <Link href="#">Blogs</Link>
              </li>
              <li>
                <Link href="#">Notes</Link>
              </li>
            </ul>
          </div>
          <div className="links pt-1 basis-3/3">
            <button className=" text-l w-22  rounded-2xl h-8 text-black border">
              Contact
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

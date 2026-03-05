import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="text-7xl caret-amber-300 m-1.5 text-center pt-34 mt-6 font-sans">
        Welcome to learn that
      </h1>
      <button className="bg-blue-400 hover:bg-sky-700 text-2xl rounded-2xl w-34 h-10 text-amber-50 shadow-xs ml-160 mt-12">
        learn more
      </button>
    </>
  );
}

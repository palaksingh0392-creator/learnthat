import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col gap-1 pt-4 bg-linear-[45deg,white_1%,pink_15%,white_60%,pink_70%,white]">
        <div className="grid grid-cols-3 gap-4 pt-3 pl-55 pb-4 ">
          <div>
            <h2 className="font-bold font-serif text-lg">Links</h2>
            <ul>
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>

              <li>
                <Link href="">Blog</Link>
              </li>
              <li>
                <Link href="">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold font-serif text-lg">Learn</h2>
            <ul>
              <li>
                <Link href="#">Courses</Link>
              </li>
              <li>
                <Link href="">Blog</Link>
              </li>
              <li>
                <Link href="">Tutorials</Link>
              </li>
              <li>
                <Link href="">Notes</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold font-serif text-lg">Social</h2>
            <ul>
              <li>
                <Link href="#">facebook</Link>
              </li>
              <li>
                <Link href="">instagram</Link>
              </li>
              <li>
                <Link href="">youtube</Link>
              </li>
              <li>
                <Link href="">twitter</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white text-black text-center h-12 pt-2">
          <h2 className=" font-serif text-lg">
            🌸🌸🌸 Made by Learnthat with 💖🌸🌸🌸
          </h2>
        </div>
      </div>
    </>
  );
}

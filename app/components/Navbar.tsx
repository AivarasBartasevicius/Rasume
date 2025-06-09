import Image from "next/image";
import Link from "next/link";
import React from "react";

const mediaList = [
  {
    link: "https://www.linkedin.com/in/aivaras-barta%C5%A1evi%C4%8Dius-b5223a17a/",
    img: "/linkedin.png",
  },
  { link: "https://github.com/AivarasBartasevicius", img: "/github.png" },
];

const Navbar = async () => {
  return (
    <div className="px-5 py-3 bg-neutral-100 shadow-sm">
      <nav className="flex justify-between items-center">
        <div className="flex">
          {mediaList.map((media, index) => (
            <Link
              key={index}
              href={media.link}
              className="mr-1"
              target="_blank"
            >
              <Image src={media.img} alt="logo" width={32} height={32}></Image>
            </Link>
          ))}
        </div>
        <div className="flex items-center text-[color:var(--green-text)] font-bold text-sm md:text-xl gap-5 md:gap-10">
          <Link href="/">
            <span>Resume</span>
          </Link>
          <Link href="/projects">
            <span>Projects</span>
          </Link>
          <Link href="/contact">
            <span>Contact</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

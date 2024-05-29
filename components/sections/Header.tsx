'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiMenu3Line } from "react-icons/ri";

export default function Header() {
  const [open, setOpen] = React.useState(false);

  


  return (
    <header className="flex flex-wrap items-center justify-between lg:justify-evenly p-4 mx-auto  fixed top-0 z-10 left-0 w-screen backdrop-blur-xl">
      <Link href="/" className="flex items-center">
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width={150}
          height={40}
          priority
        />
      </Link>
      <RiMenu3Line className="block text-2xl md:hidden cursor-pointer" onClick={() => setOpen(!open)} />
      <nav className={`w-full md:block md:w-auto  ${ open ? "block " : "hidden "} `}>
        <ol className="flex flex-col p-4 mt-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 transition-all duration-100 ease-in-out">
          {headerData.map(({ id, name, link }) => (
            <ul key={id} className="px-4 transition-all duration-500 ease-in-out">
              <Link href={link} className="text-lg hover:text-secondary">{name}</Link>

            </ul>
          ))}
        </ol>
      </nav>
    </header>
  );
}

const headerData = [
  {
    id: 1,
    name: "Caracteristicas",
    link: "#features",
  },
  {
    id: 2,
    name: "Tarjetas",
    link: "#cards",
  },
  {
    id: 3,
    name: "Testimonios",
    link: "#testimonials",
  },
  {
    id: 4,
    name: "Servicios",
    link: "#services",
  },
];

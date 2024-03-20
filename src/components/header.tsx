"use client"

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import piBankLogo from "../../public/images/image_2024-03-18_113053753-removebg-preview.png";
import Image from "next/image";
import { users } from "./mock/UsersMock";
import styles from "../styles/Navbar.module.css"
interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  { name: "Home", href: "/home" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Balance", href: "/balance" },
  { name: "Transaction", href: "/transaction" },
  { name: "Account", href: "/account" },
];

export default function Header  () {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const pathname = usePathname();
  return (
    <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-0 flex">
      <div className="flex items-center">
        <Link href="/home" className="w-32">
          <Image
            src={piBankLogo}
            alt="PiBank Logo"
            width="36"
            height="36"
            layout="fixed"
            objectFit="cover"
          />
          <h1 className="font-bold text-xl">PiBank</h1>
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden ">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <li>
                  <Link
                    href={link.href}
                    className="font-semibold underline text-sm-5 "
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link className="font-normal text-sm-5" href={link.href}>
                    {link.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-x-8">
        {users.map((user, index) => (
          <li key={index} className={styles.list}>
            <Link href="/profile">
            <div className={styles.profileImage}>
                {profileImage ? (
                  <Image src={profileImage} alt="" width={100} height={100} />
                ) : (
                  <Image src={user.profile_picture} alt="" width={100} height={100} />
                )}
              </div>
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
}


import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

// Replace "PiBankLogo.png" with the actual path to your image
import piBankLogo from "../../public/images/image_2024-03-18_113053753-removebg-preview.png";
import Image from "next/image";

export default function App() {
  const menuItems = [
    "Profile",
    "Dashboard",
    "Historiques",
    "Balance",
    "Transfer",
    "Transactions",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
        <Image
            src = {piBankLogo}
            alt="PiBank Logo"
            width="36"
            height="36"
            layout="fixed"
            objectFit="cover"
          />
        <p className="font-bold text-inherit">PiBank</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
        <Image
            src = {piBankLogo}
            alt="PiBank Logo"
            width="36"
            height="36"
            layout="fixed"
            objectFit="cover"
          />    
          <p className="font-bold text-inherit">PiBank</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="warning">
            Balance
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Transactions
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

"use client"

import React, { useState } from 'react'
import { Nav } from './nav'
import {
    History,
    LayoutDashboard,
    ArrowUpDown,
    Settings,
    UsersRound,
    ChevronRight,
  } from "lucide-react"
import { Button } from './ui/button'
type Props = {}

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className='relative min-w-20 border-r px-3 pb-10 pt-24 '>
      <div className='absolute right-{-20px} top-7'>
      <Button
       onClick={toggleSidebar}
       variant='secondary' 
       className='rounded-full  p-2 '>
        <ChevronRight />
      </Button>
      </div>
        <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Dashboard",
                href: "/dashboard",
                icon: LayoutDashboard,
                variant: "default",
              },
              {
                title: "Users",
                href: "/users",
                icon: UsersRound,
                variant: "ghost",
              },
              {
                title: "Trasactions",
                href: "/transaction",
                icon: ArrowUpDown,
                variant: "ghost",
              },
              {
                title: "History",
                href:"/history",
                icon: History,
                variant: "ghost",
              },
              {
                title: "Settings",
                href:"/settings",
                icon: Settings,
                variant: "ghost",
              },
            ]}
          />

    </div>
  )
}
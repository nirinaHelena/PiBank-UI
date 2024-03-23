"use client"

import React from 'react'
import { Nav } from './nav'
import {
    History,
    LayoutDashboard,
    ArrowUpDown,
    Settings,
    Users2,
    UsersRound,
  } from "lucide-react"
type Props = {}

export default function SideNavbar({}: Props) {
  return (
    <div>
        <Nav
            isCollapsed={false}
            links={[
              {
                title: "Dashboard",
                href: "/",
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
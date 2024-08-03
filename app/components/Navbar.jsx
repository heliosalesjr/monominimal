"use client";

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";
import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale} from "./Icons.jsx";
import {AcmeLogo} from "./AcmeLogo.jsx";

export default function App() {
  

  return (
    <Navbar>
      <NavbarBrand>
        
        <p className="font-bold">Monominimal</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Posts
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Newsletter
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

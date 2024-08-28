"use client";

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";



export default function App() {
  

  return (
    <Navbar>
      <NavbarBrand className="navbar-brand">
        
        <h1 className="font-bold text-slate-800 hover:text-primary text-xl my-4">Monominimal</h1>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        
        <NavbarItem isActive>
          <Link href="#" aria-current="page" className="hover:underline underline-offset-4 decoration-pink-700">
            Posts
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="hover:underline underline-offset-4 decoration-pink-700">
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

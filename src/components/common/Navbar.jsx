import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Importa el ícono de usuario
import SearchBar from "../SearchBar";
import Link from "next/link"; // Importa el componente Link de Next.js

const Navbar = ({ onSearch }) => {


  return (
      <AppBar position="static" className="bg-blue-600">
        <Toolbar className="flex justify-between items-center">
          {/* Enlace a la página principal */}
          <Link href="/" className="pl-2 text-white no-underline hover:underline">
              <Typography variant="h6" noWrap>
                Foodie
              </Typography>
          </Link>
          <div className="text-center">
            <SearchBar />
          </div>
          {/* Enlace a la página de perfil (usando el valor del localStorage como "id") */}
          <Link  className="text-white no-underline hover:underline" href={`/profile`}>
              <IconButton color="inherit" aria-label="perfil" className="mr-2">
                <AccountCircleIcon />
                <span className="hidden sm:inline">Perfil</span>
              </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
  );
};

export default Navbar;

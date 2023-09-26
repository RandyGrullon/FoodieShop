import React, { useEffect, useState } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchBar from "../SearchBar";
import { useRouter } from "next/router";

const Navbar = ({ onSearch }) => {
  const [user, setUser] = useState({});
  const router = useRouter();

  const handleLogout = () => {};
  
  return (
    <AppBar position="static" className="bg-blue-600">
      <Toolbar className="flex justify-between items-center">
        <Link href="/" className="pl-2 text-white no-underline hover:underline">
          <Typography variant="h6" noWrap>
            Foodie
          </Typography>
        </Link>
        {user && (
          <div className="flex items-center">
            <div className="text-center">
              <SearchBar
                onSearch={onSearch}
                className="hidden sm:inline-block"
              />
            </div>
            <Link
              href={`/profile/${user.id}`}
              className="text-white no-underline hover:underline"
            >
              <IconButton color="inherit" aria-label="perfil" className="mr-2">
                <AccountCircleIcon />
                <span className="hidden sm:inline text-sm">Perfil</span>
              </IconButton>
            </Link>
            <Link href="/cart">
              <IconButton color="inherit" aria-label="Cart" className="mr-2">
                <ShoppingCartIcon />
                <span className="hidden sm:inline text-sm">Cart</span>
              </IconButton>
            </Link>
            <IconButton
              color="inherit"
              aria-label="Salir"
              className="mr-2"
              onClick={handleLogout}
            >
              <ExitToAppIcon />
              {/* Corrección: No es necesario usar Link aquí */}
              <span className="hidden sm:inline text-sm">Salir</span>
            </IconButton>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

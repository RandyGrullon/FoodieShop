import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Importa el icono de carrito
import SearchBar from "../SearchBar";

const Navbar = ({ onSearch }) => {
  const router = useRouter();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

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
            <Link href="/cart"> {/* Agrega el enlace a la página de carrito */}
              <IconButton color="inherit" aria-label="Cart" className="mr-2">
                <ShoppingCartIcon /> {/* Icono de carrito */}
                <span className="hidden sm:inline text-sm">Cart</span> {/* Texto "Cart" */}
              </IconButton>
            </Link>
            <IconButton
              color="inherit"
              aria-label="Salir"
              className="mr-2"
              onClick={handleLogout}
            >
              <ExitToAppIcon />
              <Link href={`/auth/login`}>
                <span className="hidden sm:inline text-sm">Salir</span>
              </Link>
            </IconButton>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

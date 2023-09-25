import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";

const Footer = () => {
  return (
    <div className="bg-blue-600 py-4 text-white ">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Foodie. Todos los derechos
            reservados.
          </p>
          <a
            href="https://github.com/tuusuario/turepositorio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton className="text-white" aria-label="GitHub">
              <GitHubIcon />
            </IconButton>
          </a>
          {/* Agrega el componente Button con un texto y una función onClick */}
        </div>
      </div>
    </div>
  );
};

export default Footer;

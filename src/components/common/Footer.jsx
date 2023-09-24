import React from 'react';
import { Typography, makeStyles, AppBar, Toolbar, Link, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from './Button'; // Importa el componente Button

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main, // Cambia el color de fondo según tus necesidades
    padding: theme.spacing(2),
    marginTop: 'auto',
  },
  text: {
    color: theme.palette.common.white, // Cambia el color del texto según tus necesidades
  },
  githubIcon: {
    color: theme.palette.common.white, // Cambia el color del ícono según tus necesidades
  },
}));

const Footer = () => {
  const classes = useStyles();

  const handleButtonClick = () => {
    // Agrega la lógica para manejar el clic en el botón aquí
  };

  return (
    <AppBar position="static" className={classes.footer}>
      <Toolbar>
        <Typography variant="body2" className={classes.text}>
          &copy; {new Date().getFullYear()} Foodie. Todos los derechos reservados.
        </Typography>
        <Link
          href="https://github.com/tuusuario/turepositorio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton className={classes.githubIcon} aria-label="GitHub">
            <GitHubIcon />
          </IconButton>
        </Link>
        <Button text="Mi Botón" onClick={handleButtonClick} />
        {/* Agrega el componente Button con un texto y una función onClick */}
      </Toolbar>
    </AppBar>
  );
};

export default Footer;

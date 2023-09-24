import React from 'react';
import { Button as MUIButton, makeStyles, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: 'none', // Cambia el estilo del texto del botón según tus necesidades
  },
  icon: {
    marginRight: theme.spacing(1), // Espacio entre el ícono y el texto del botón
  },
}));

const Button = ({ text, icon, onClick }) => {
  const classes = useStyles();

  return (
    <MUIButton
      variant="contained"
      color="primary" // Cambia el color del botón según tus necesidades
      className={classes.button}
      onClick={onClick}
    >
      {icon && <ShoppingCartIcon className={classes.icon} />} {/* Si icon es true, muestra el ícono */}
      {text}
    </MUIButton>
  );
};

export default Button;

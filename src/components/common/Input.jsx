import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { makeStyles } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles((theme) => ({
  input: {
    width: '100%', // Cambia la anchura según tus necesidades
  },
}));

const Input = ({ label, placeholder, icon }) => {
  const classes = useStyles();

  return (
    <TextField
      label={label}
      placeholder={placeholder}
      className={classes.input}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {icon && <SearchIcon />} {/* Si icon es true, muestra el ícono */}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Input;

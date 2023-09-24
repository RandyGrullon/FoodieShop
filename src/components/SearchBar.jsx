import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles'; // Actualiza esta importación
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.primary.main,
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    padding: '2px 4px',
    width: 400,
  },
  inputBase: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const SearchBar = ({ onSearch }) => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <Paper component="form" className={classes.paper}>
          <InputBase
            className={classes.inputBase}
            placeholder="Buscar productos"
            inputProps={{ 'aria-label': 'buscar productos' }}
            value={searchTerm}
            onChange={handleInputChange}
          />
          <IconButton
            type="button"
            className={classes.iconButton}
            aria-label="buscar"
            onClick={handleSearch}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </Toolbar>
    </AppBar>
  );
};

export default SearchBar;

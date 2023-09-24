import React from 'react';
import { makeStyles, Paper, Typography, TextField, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

const UserSettings = ({ user, onSaveSettings }) => {
  const classes = useStyles();

  const [name, setName] = React.useState(user.name);
  const [email, setEmail] = React.useState(user.email);

  const handleSaveSettings = () => {
    const updatedUser = {
      ...user,
      name,
      email,
    };
    onSaveSettings(updatedUser);
  };

  return (
    <Paper elevation={3} className={classes.paper}>
      <AccountCircleIcon fontSize="large" color="primary" />
      <Typography variant="h5" gutterBottom>
        Ajustes de Usuario
      </Typography>
      <form className={classes.form}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.submitButton}
          onClick={handleSaveSettings}
        >
          Guardar Ajustes
        </Button>
      </form>
    </Paper>
  );
};

export default UserSettings;

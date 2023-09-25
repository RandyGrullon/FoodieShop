import React, { useState } from 'react';
import {
  Paper,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const UserSettings = ({ user, onSaveSettings }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSaveSettings = () => {
    const updatedUser = {
      ...user,
      name,
      email,
    };
    onSaveSettings(updatedUser);
  };

  return (
    <Paper elevation={3} className="p-4">
      <AccountCircleIcon fontSize="large" className="text-primary" />
      <Typography variant="h5" className="mb-4">
        Ajustes de Usuario
      </Typography>
      <form className="w-full">
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4"
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4"
        />
        <Button
          variant="contained"
          color="primary"
          className="mt-4"
          onClick={handleSaveSettings}
        >
          Guardar Ajustes
        </Button>
      </form>
    </Paper>
  );
};

export default UserSettings;

import React from 'react';
import { Paper, Typography, Avatar, IconButton, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const UserProfile = ({ user, onEditProfile }) => {
  return (
    <Paper elevation={3} className="p-4">
      <div className="flex justify-center mb-4">
        <Avatar alt={user.name} src={user.avatarUrl} className="w-20 h-20" />
        <IconButton
          className="ml-auto"
          color="primary"
          aria-label="Editar perfil"
          onClick={onEditProfile}
        >
          <EditIcon />
        </IconButton>
      </div>
      <Typography variant="h5" gutterBottom>
        {user.name}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        Correo Electrónico: {user.email}
      </Typography>
      <Button variant="contained" color="primary">
        Ver historial de compras
      </Button>
    </Paper>
  );
};

export default UserProfile;

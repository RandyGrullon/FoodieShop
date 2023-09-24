import React from 'react';
import { makeStyles, Paper, Typography, Avatar, IconButton, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  editButton: {
    marginLeft: 'auto',
  },
}));

const UserProfile = ({ user, onEditProfile }) => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.paper}>
      <div className={classes.avatarContainer}>
        <Avatar alt={user.name} src={user.avatarUrl} className={classes.avatar} />
        <IconButton
          className={classes.editButton}
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

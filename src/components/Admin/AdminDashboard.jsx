import React from 'react';
import { makeStyles, Paper, Typography, Button, Grid } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
  },
  icon: {
    fontSize: 80,
    color: theme.palette.primary.main,
  },
  buttonContainer: {
    marginTop: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(2),
  },
}));

const AdminDashboard = () => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.paper}>
      <Grid container justifyContent="center" alignItems="center" spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Panel de Administración
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <BuildIcon className={classes.icon} />
        </Grid>
        <Grid item xs={12} className={classes.buttonContainer}>
          <Button variant="contained" color="primary" className={classes.button}>
            Gestionar Productos
          </Button>
          <Button variant="contained" color="primary" className={classes.button}>
            Gestionar Usuarios
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AdminDashboard;

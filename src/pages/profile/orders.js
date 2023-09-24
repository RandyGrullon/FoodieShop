import React, { useEffect, useState } from 'react';
import { makeStyles, Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
  },
}));

const UserOrders = ({ userId }) => {
  const classes = useStyles();
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    // Simulación de una solicitud a la API para obtener el historial de órdenes del usuario
    const fetchUserOrders = async () => {
      try {
        const response = await fetch(`/api/users/${userId}/orders`);
        if (response.ok) {
          const data = await response.json();
          setUserOrders(data); // Actualiza el estado con el historial de órdenes
        } else {
          // Manejo de errores si la solicitud falla
          console.error('Error al obtener el historial de órdenes del usuario');
        }
      } catch (error) {
        console.error('Error al obtener el historial de órdenes del usuario:', error);
      }
    };

    // Llama a la función para obtener el historial de órdenes cuando se monta el componente
    fetchUserOrders();
  }, [userId]);

  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Historial de Órdenes
      </Typography>
      {userOrders.length === 0 ? (
        <Typography variant="body1">No tienes órdenes registradas.</Typography>
      ) : (
        <List>
          {userOrders.map((order) => (
            <ListItem key={order.id}>
              <ListItemText
                primary={`Orden #${order.id}`}
                secondary={`Total: $${order.total}`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default UserOrders;

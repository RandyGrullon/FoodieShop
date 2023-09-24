import React, { useState, useEffect } from 'react';
import { makeStyles, Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
  },
  ordersList: {
    marginTop: theme.spacing(2),
  },
}));

const AdminDashboard = () => {
  const classes = useStyles();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulación de una solicitud a la API para obtener la lista de órdenes
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/admin/orders'); // Reemplaza con la lógica adecuada
        if (response.ok) {
          const data = await response.json();
          setOrders(data); // Actualiza el estado con la lista de órdenes
        } else {
          // Manejo de errores si la solicitud falla
          console.error('Error al obtener la lista de órdenes');
        }
      } catch (error) {
        console.error('Error al obtener la lista de órdenes:', error);
      }
    };

    // Llama a la función para obtener la lista de órdenes cuando se monta el componente
    fetchOrders();
  }, []);

  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Panel de Administración
      </Typography>
      <Typography variant="h5" gutterBottom>
        Órdenes Recientes
      </Typography>
      {orders.length === 0 ? (
        <Typography variant="body1">No hay órdenes registradas.</Typography>
      ) : (
        <List className={classes.ordersList}>
          {orders.map((order) => (
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

export default AdminDashboard;

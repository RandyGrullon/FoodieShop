import React from 'react';
import { makeStyles, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
  },
  table: {
    minWidth: 650,
  },
}));

const UserOrders = ({ orders }) => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.paper}>
      <Typography variant="h5" gutterBottom>
        Historial de Compras
      </Typography>
      {orders.length === 0 ? (
        <Typography variant="body2" color="textSecondary">
          Aún no has realizado ninguna compra.
        </Typography>
      ) : (
        <TableContainer>
          <Table className={classes.table} size="small">
            <TableHead>
              <TableRow>
                <TableCell>Fecha</TableCell>
                <TableCell>Productos</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>
                    {order.products.map((product) => (
                      <div key={product.id}>
                        {product.name} x{product.quantity}
                      </div>
                    ))}
                  </TableCell>
                  <TableCell>${order.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Paper>
  );
};

export default UserOrders;

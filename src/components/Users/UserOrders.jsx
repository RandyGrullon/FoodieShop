import React from 'react';
import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const UserOrders = ({ orders }) => {
  return (
    <Paper elevation={3} className="p-4">
      <Typography variant="h5" className="mb-4">
        Historial de Compras
      </Typography>
      {orders.length === 0 ? (
        <Typography variant="body2" color="textSecondary">
          Aún no has realizado ninguna compra.
        </Typography>
      ) : (
        <TableContainer>
          <Table className="min-w-full" size="small">
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

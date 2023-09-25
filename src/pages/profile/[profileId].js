import React, { useState } from "react";
import {
  Paper,
  Typography,
  Avatar,
  IconButton,
  Button,
  Modal,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const UserProfile = ({ onEditProfile }) => {
  const userFromLocalStorage =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("foodie-info-user"))
      : null;

  // Estado para controlar la apertura/cierre del modal de edición
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Estado para mantener los datos editados del usuario
  const [editedUser, setEditedUser] = useState({
    name: userFromLocalStorage?.name || "",
    email: userFromLocalStorage?.email || "",
    address: userFromLocalStorage?.address || "",
    phone: userFromLocalStorage?.phone || "",
    description: userFromLocalStorage?.description || "",
    jobPosition: userFromLocalStorage?.jobPosition || "",
    city: userFromLocalStorage?.city || "",
  });

  // Manejador para abrir el modal de edición
  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  // Manejador para guardar los cambios en el modal de edición
  const handleSaveChanges = () => {
    // Actualiza el localStorage con los datos editados
    localStorage.setItem("foodie-info-user", JSON.stringify(userFromLocalStorage + editedUser));

    // Cierra el modal de edición
    setIsEditModalOpen(false);
  };

  // Manejador para cerrar el modal de edición
  const handleCloseModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5 text-black">
      <Avatar
        alt=""
        src={userFromLocalStorage?.avatarUrl || "/default-avatar.png"}
        className="w-32 h-32 rounded-full mx-auto"
      />
      <div className="flex justify-center items-center">
        <Typography
          variant="h5"
          className="text-center text-2xl font-semibold mt-3"
        >
          {editedUser.name}
        </Typography>
        <IconButton
          className="text-blue-500 hover:text-blue-700 ml-3"
          color="primary"
          aria-label="Editar perfil"
          onClick={handleEditClick}
        >
          <EditIcon />
        </IconButton>
      </div>
      <Typography className="text-center text-gray-600 mt-1">
        {editedUser.jobPosition}
      </Typography>

      <div className="mt-5">
        <h3 className="text-xl font-semibold">Bio</h3>
        <p className="text-gray-600 mt-2">{editedUser.description}</p>
      </div>
      {/* dirección */}
      <div className="mt-5">
        <h3 className="text-xl font-semibold">Dirección</h3>
        <p className="text-gray-600 mt-2">
          {`${editedUser.address}, ${editedUser.city}`}
        </p>
      </div>

      <div className="mt-5">
        <h3 className="text-xl font-semibold">Información de Contacto</h3>
        <Typography className="text-gray-600 mt-2">
          Correo Electrónico: {editedUser.email}
        </Typography>
        <Typography className="text-gray-600 mt-2">
          Teléfono: {editedUser.phone}
        </Typography>
      </div>

      <Modal open={isEditModalOpen} onClose={handleCloseModal}>
        <div className="bg-white p-4 w-96 mx-auto mt-20 text-black text-center">
          <Typography variant="h6" gutterBottom>
            Editar Perfil
          </Typography>
          <TextField
            label="Nombre"
            fullWidth
            margin="normal"
            variant="outlined"
            value={editedUser.name}
            onChange={(e) =>
              setEditedUser({ ...editedUser, name: e.target.value })
            }
          />
          <TextField
            label="Correo Electrónico"
            fullWidth
            margin="normal"
            variant="outlined"
            value={editedUser.email}
            onChange={(e) =>
              setEditedUser({ ...editedUser, email: e.target.value })
            }
          />
          <TextField
            label="Posición"
            fullWidth
            margin="normal"
            variant="outlined"
            value={editedUser.jobPosition}
            onChange={(e) =>
              setEditedUser({ ...editedUser, jobPosition: e.target.value })
            }
          />
          <TextField
            label="Dirección"
            fullWidth
            margin="normal"
            variant="outlined"
            value={editedUser.address}
            onChange={(e) =>
              setEditedUser({ ...editedUser, address: e.target.value })
            }
          />
          <TextField
            label="Ciudad"
            fullWidth
            margin="normal"
            variant="outlined"
            value={editedUser.city}
            onChange={(e) =>
              setEditedUser({ ...editedUser, city: e.target.value })
            }
          />
          <TextField
            label="Teléfono"
            fullWidth
            margin="normal"
            variant="outlined"
            value={editedUser.phone}
            onChange={(e) =>
              setEditedUser({ ...editedUser, phone: e.target.value })
            }
          />
          <TextField
            label="Descripción"
            fullWidth
            margin="normal"
            variant="outlined"
            value={editedUser.description}
            onChange={(e) =>
              setEditedUser({ ...editedUser, description: e.target.value })
            }
          />
          <div className="flex justify-center mt-4">
            <Button
              variant="contained"
              className="bg-white text-black hover:bg-blue-500 hover:text-white"
              onClick={handleSaveChanges}
            >
              Guardar Cambios
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UserProfile;

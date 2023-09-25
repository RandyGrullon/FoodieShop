import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

const ModalEditInfo = ({
  isOpen,
  onClose,
  onSave,
  user,
  editedUser,
  dispatch,
  onInputChange,
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogContent>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          variant="outlined"
          name="name"
          value={editedUser.name || ""}
          onChange={onInputChange}
        />
        <TextField
          label="Address"
          fullWidth
          margin="normal"
          variant="outlined"
          name="address"
          value={editedUser.address || ""}
          onChange={onInputChange}
        />
        <TextField
          label="Job Position"
          fullWidth
          margin="normal"
          variant="outlined"
          name="jobPosition"
          value={editedUser.jobPosition || ""}
          onChange={onInputChange}
        />
        <TextField
          label="Description"
          fullWidth
          margin="normal"
          variant="outlined"
          name="description"
          value={editedUser.description || ""}
          onChange={onInputChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onSave} color="primary">
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalEditInfo;

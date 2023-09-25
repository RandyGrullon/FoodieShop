import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Paper,
} from "@mui/material";
import Dropzone from "react-dropzone";

const ModalEditImageProfile = ({ isOpen, onClose, onImageDrop, onSaveImage }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Upload Profile Picture</DialogTitle>
      <DialogContent>
        <Dropzone onDrop={onImageDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className="dropzone">
              <input {...getInputProps()} />
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  borderStyle: "dashed",
                  borderWidth: 2,
                  borderColor: "primary.main",
                  borderRadius: 1,
                  textAlign: "center",
                }}
              >
                <Typography variant="body1">
                  Drag and drop a new profile picture here, or click to select one.
                </Typography>
              </Paper>
            </div>
          )}
        </Dropzone>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onSaveImage} color="primary">
          Save Image
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalEditImageProfile;

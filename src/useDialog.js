import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

const useDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const DialogComponent = () => {
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        disableEscapeKeyDown
        disableBackdropClick
      >
        <DialogTitle>Create New Dialog</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" label="Dialog Title" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Create</Button>
        </DialogActions>
      </Dialog>
    );
  };

  const DialogContainer = () => {
    return (
      <React.Fragment>
        {open && (
          <div>
            <DialogComponent />
          </div>
        )}
      </React.Fragment>
    );
  };

  return [DialogComponent, handleClickOpen, DialogContainer];
};

export default useDialog;

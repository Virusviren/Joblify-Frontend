import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface IPROPS {
  open: boolean;
  setOpen(open: boolean): any;
  title: String;
  message: String;
  handelSubmit?: void;
  withDrawApplication?: any;
  idOfApplication?: any;
}
const UserActionConfirmation = ({
  open,
  setOpen,
  title,
  message,
  withDrawApplication,
  idOfApplication,
}: IPROPS) => {
  return (
    <Dialog
      open={open}
      maxWidth='xl'
      disableEscapeKeyDown={true}
      BackdropProps={{
        style: {
          backdropFilter: 'blur(15px)',
          background: 'rgba(196, 196, 196, 0.5)',
        },
      }}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>No</Button>
        <Button
          onClick={() => {
            setOpen(false);
            withDrawApplication.mutate(idOfApplication);
          }}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserActionConfirmation;

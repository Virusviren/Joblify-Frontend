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
}
const UserActionConfirmation = ({ open, setOpen, title, message }: IPROPS) => {
  return (
    <Dialog open={open} maxWidth='xl' disableEscapeKeyDown={true}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>No</Button>
        <Button onClick={() => setOpen(false)}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserActionConfirmation;
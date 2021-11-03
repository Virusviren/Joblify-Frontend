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
  deleteJob: (id: string) => Promise<void>;
  idOfJob?: any;
}
const UserActionDeleteJobHr = ({
  open,
  setOpen,
  title,
  message,
  deleteJob,
  idOfJob,
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
            deleteJob(idOfJob as string);
          }}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserActionDeleteJobHr;

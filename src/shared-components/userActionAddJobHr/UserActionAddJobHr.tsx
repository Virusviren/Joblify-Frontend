import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { PostJob } from '../../typings/jobs';

interface IPROPS {
  open: boolean;
  setOpen(open: boolean): any;
  closeAdd(open: boolean): any;
  title: String;
  message: String;
  handelSubmit?: void;
  addJob: (data: PostJob) => Promise<void>;
  jobData: PostJob;
}
const UserActionAddJobHr = ({
  open,
  setOpen,
  title,
  message,
  addJob,
  jobData,
  closeAdd,
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
            addJob(jobData);
            closeAdd(false);
          }}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserActionAddJobHr;

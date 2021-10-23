import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, Divider, Avatar } from '@mui/material';
import deleteIcon from '../../static/icons/delete.svg';

interface IPROPS {
  openView: boolean;
  close: React.Dispatch<React.SetStateAction<boolean>>;
  videoSrc?: string;
}

const InformationVideo = ({ openView, close, videoSrc }: IPROPS) => {
  return (
    <Dialog
      open={openView}
      disableEscapeKeyDown={true}
      maxWidth='lg'
      BackdropProps={{
        style: {
          backdropFilter: 'blur(15px)',
          background: 'rgba(196, 196, 196, 0.5)',
        },
      }}
    >
      <DialogTitle style={{ padding: '1.5rem 3rem' }}>
        <Grid container justifyContent='space-between'>
          <Grid item>
            <h4>Informational Video</h4>
          </Grid>

          <Grid item>
            <img
              src={deleteIcon}
              alt='close img'
              style={{ cursor: 'pointer' }}
              onClick={() => {
                close(false);
              }}
            />
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent style={{ overflow: 'hidden' }}>
        <video width='100%' autoPlay controls>
          <source src={videoSrc} type='video/mp4' />
        </video>
      </DialogContent>
    </Dialog>
  );
};

export default InformationVideo;

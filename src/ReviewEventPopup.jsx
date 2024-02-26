import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const ReviewEventPopup = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Publish your Category
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Review Event</DialogTitle>
        <DialogContent>
          <p>Please allow us up to an hour to review your event before it goes live on the app.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ReviewEventPopup;

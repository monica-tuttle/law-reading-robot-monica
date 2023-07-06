import * as React from 'react';
//import MaterialUI components
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './DisclosureDialog.css';

export default function DisclosureDialog() {
  const [open, setOpen] = React.useState(true); //Dialog is open by default

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="text" onClick={handleClickOpen} color="inherit">
        Disclosure
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="disclosure-dialog-title"
        aria-describedby="disclosure-acknowledgment"
      >
        <DialogTitle id="disclosure-dialog-title" component="h1">
          {"Important Information and Usage Guidelines"}
        </DialogTitle>
        <DialogContent dividers>
          <DialogTitle
            sx={{ 
              pl: 0, //padding left 
            }}
          >
            Disclaimer
          </DialogTitle>
          <DialogContentText>
          The summaries included in each bill entry on this page are generated by an artificial intelligence (AI) algorithm called ChatGPT. They are intended solely as a research tool and should not be considered legal advice. The AI-generated summaries are provided for informational purposes only.
          </DialogContentText>
          <DialogTitle
            sx={{
              pl: 0,
            }}
          >
          General Advice
          </DialogTitle>
          <DialogContentText>
          Please note the following recommendations for the best use of this application:
          <ol class="ordered-list">
            <li><b>Consult the full bill text</b>: The summaries provided by ChatGPT are designed to offer a brief overview of each bill, but they are not a substitute for the full bill text. To gain a comprehensive understanding of a bill, it is highly recommended to review the complete bill text.</li>
            <li><b>Exercise caution</b>: ChatGPT's responses may include inaccurate information about people, places, or facts. While efforts have been made to train ChatGPT to provide helpful information, it may produce errors or misleading content. It is important to verify information from reliable sources before drawing conclusions or making decisions based on ChatGPT's responses.</li>
          </ol>
          </DialogContentText>
          <DialogContentText id="disclosure-acknowledgement">
          By continuing to use this web app, you acknowledge that the summaries are generated by ChatGPT and should not be considered legal advice. You also understand that the summaries are intended as a research tool and not a replacement for the full bill text.
          </DialogContentText>
        </DialogContent>
      
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
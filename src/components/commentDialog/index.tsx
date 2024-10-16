
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { DialogProps } from '../../common/types';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CommentDialogComponent({handleClose, open, comment}: DialogProps) {
  return (
    <BootstrapDialog
    onClose={handleClose}
    aria-labelledby="customized-dialog-title"
    open={open}
    >
    <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Email Detail
    </DialogTitle>
    <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={(theme) => ({
        position: 'absolute',
        right: 8,
        top: 8,
        color: theme.palette.grey[500],
        })}
    >
        <CloseIcon />
    </IconButton>
    <DialogContent dividers sx={{textAlign:'center'}}>
        <Typography gutterBottom>
        {comment.id}
        </Typography>
        <Typography gutterBottom>
        {comment.name}
        </Typography>
        <Typography gutterBottom>
        {comment.email}
        </Typography>
        <Typography gutterBottom>
        {comment.body}
        </Typography>
    </DialogContent>
    </BootstrapDialog>
  )
}

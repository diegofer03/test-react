import { Box, IconButton, ListItem, ListItemText } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from 'react'
import { CommentProps } from '../../common/types';
import CommentDialogComponent from '../commentDialog';

export default function CommentItemComponent({comment}: CommentProps) {
const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <ListItem
        sx={{padding: '10px ', marginY:'10px', border:'1px solid gray', display:'flex', 
            justifyContent: 'space-evenly', borderRadius:'20px'}}
        secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={handleClickOpen} sx={{background:'unset'}} size='large'>
            <VisibilityIcon />
        </IconButton>
        }
    >
        <Box display='flex' aria-label='box' sx={{
          flexDirection: {
            xs: 'column',  
            sm: 'row',  
            md: 'row',     
            lg: 'row',     
          },
          }} width='100%' justifyContent='space-between'>
            <ListItemText sx={{wordWrap:'break-word'}}
            primary={comment.id}
            />
            <ListItemText sx={{ display:'flex', justifyContent:'center', width:{
                xs: '60%',  
                sm: '60%',  
                md: '33%',     
                lg: '33%',     
              }, wordWrap:'break-word'}}
            primary={comment.name}
            />
            <ListItemText sx={{wordWrap:'break-word'}}
            primary={comment.email}
            />
        </Box>
        <CommentDialogComponent comment={comment} open={open} handleClose={handleClose} />
    </ListItem>
  )
}

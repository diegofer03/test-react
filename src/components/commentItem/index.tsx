import { Box, IconButton, ListItem, ListItemText } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import React from 'react'
import { CommentProps } from '../../common/types';

export default function CommentItemComponent({comment}: CommentProps) {
  return (
    <ListItem
        sx={{padding: '10px ', marginY:'10px', border:'1px solid gray', display:'flex', 
            justifyContent: 'space-evenly', borderRadius:'20px'}}
        secondaryAction={
        <IconButton edge="end" aria-label="delete" sx={{background:'unset'}} size='large'>
            <VisibilityIcon />
        </IconButton>
        }
    >
        <Box display='flex' width='100%' justifyContent='space-between'>
            <ListItemText 
            primary={comment.id}
            />
            <ListItemText sx={{ display:'flex', justifyContent:'center', width:'30%', wordWrap:'break-word'}}
            primary={comment.name}
            />
            <ListItemText 
            primary={comment.email}
            />
        </Box>
    </ListItem>
  )
}

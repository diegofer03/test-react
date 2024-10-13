/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, List } from "@mui/material";
import { useFetch } from "../../hooks/useFetch";
import { endPoints } from "../../services/api";
import { useEffect, useState } from "react";
import CommentItemComponent from "../commentItem";

const PRODUCT_LIMIT = 15
const PRODUCT_OFFSET = 0

export default function CommentsListComponent() {
  const [currPage, setCurrPage] = useState(PRODUCT_LIMIT)
  const [comments, setComments] = useState<Array<any> | null>([])
  const response = useFetch(endPoints.comments.getComments(currPage, PRODUCT_OFFSET))
  
  useEffect(() => {
    if(response){
      const aux = response.splice(0, 15)
      console.log(aux)
      console.log(response)
      setComments(aux)
    }
  }, [response])
  return (
   
    <Box  sx={{ height:'75vh', margin:'15px', overflowX:'auto'}} >
      <Box sx={{ display:'flex', justifyContent:'center',}}>
        <List sx={{ width:'80%',  overflow:'hidden'}}>
          {comments?.map((comment) => (
            <CommentItemComponent key={comment.id} comment={comment}/>
          ))
          }
        </List>
      </Box>
    </Box>
  )
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, List } from "@mui/material";
import { useFetch } from "../../hooks/useFetch";
import { endPoints } from "../../services/api";
import { useEffect, useRef, useState } from "react";
import CommentItemComponent from "../commentItem";

const PRODUCT_LIMIT = 15
const PRODUCT_OFFSET = 0

export default function CommentsListComponent() {
  const [currPage, setCurrPage] = useState(PRODUCT_LIMIT)
  const [comments, setComments] = useState<Array<any> | null>([])
  const response = useFetch(endPoints.comments.getComments(currPage, PRODUCT_OFFSET))
  const listInnerRef = useRef(null)
  
  useEffect(() => {
    if(response){
      const aux = response.splice(0, 15)
      setComments([...aux])
    }
  }, [response])

  const addData = () => {
    if(response){
      if(response.length > PRODUCT_LIMIT){
        const aux = response.splice(0, 15)
        if(comments)
          setComments([...comments , ...aux])
        else setComments([...aux])
      }else{
        const aux = response.splice(0, response.length)
        if(comments)
          setComments([...comments , ...aux])
        else setComments([...aux])
      }
    }
  }

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current
      if (scrollTop + clientHeight >= scrollHeight) {
        setCurrPage(currPage + PRODUCT_LIMIT)
        addData()
      }
    }
  }
  return (
   
    <Box  sx={{ height:{sm:'80vh', md:'75vh'}, margin:'15px', overflowX:'auto'}} ref={listInnerRef} onScroll={onScroll}>
      <Box sx={{ display:'flex', justifyContent:'center',}}>
        <List sx={{ width:'80%',  overflow:'hidden'}} aria-label="listComment">
          {comments?.map((comment, index) => (
            <CommentItemComponent key={index} comment={comment}/>
          ))
          }
        </List>
      </Box>
    </Box>
  )
}

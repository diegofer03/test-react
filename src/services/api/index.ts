import { api } from "../../script/api";

const endPoints = {
    comments: {
      getComments: (limit : number, offset: number) =>
        `${api}comments?limit=${limit}&offset=${offset}`,
    }
  }

  export {endPoints}
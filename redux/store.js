import { configureStore, createSlice } from "@reduxjs/toolkit";
import { errorToJSON } from "next/dist/server/render";

export default configureStore({
    reducer : {

    }
})

const data = createSlice({
    name : "data",
    initialState : {
        value : null,
        error : undefined
    },
    reducers : {
        all : async state =>{
            const data = await fetch("http://195.35.48.48:8080/tableaux")
            if(data == "")
                state.error = "Erreur de fetch de data"
            else
                state.value = data
        },
        
    }
})
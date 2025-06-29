import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const Slice_1 = createSlice({
    name:"Slice_1",
    initialState:false,
    reducers:{
        container_2_boolean(state , action:PayloadAction<boolean>){
            return(action.payload)
        }
    }
})

export default Slice_1.reducer
export const {container_2_boolean} = Slice_1.actions
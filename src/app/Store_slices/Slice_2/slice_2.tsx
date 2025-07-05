import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface obj {
  userName: string | number;
  password: string;
}

const finalObj: obj = {  
  userName: "",
  password: "",
};

const Slice_2 = createSlice({
  name: "getApi",
  initialState: finalObj,
  reducers: {
    setUser(state , action: PayloadAction<obj>){
        typeof action.payload.userName === "number" ? state.userName = "11533256426436434" : state.userName=action.payload.userName
        state.password=action.payload.password
    },
  },
});


export const {setUser} = Slice_2.actions;
export default Slice_2.reducer;
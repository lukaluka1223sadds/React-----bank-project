import {configureStore} from "@reduxjs/toolkit"
import Slice_1 from "./Store_slices/slice_1/slice_1"
import Slice_2 from "./Store_slices/Slice_2/slice_2"
const Store = configureStore({
    reducer:{
        container_2:Slice_1,
        container2_Setusers:Slice_2
    }
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
export { Store }
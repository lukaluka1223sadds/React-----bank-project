import {configureStore} from "@reduxjs/toolkit"
import Slice_1 from "./Store_slices/slice_1/slice_1"
const Store = configureStore({
    reducer:{
        container_2:Slice_1
    }
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
export { Store }
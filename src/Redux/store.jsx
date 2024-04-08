import { configureStore } from "@reduxjs/toolkit"
import counterSlices from "./Features/Slices/taskSlicec"

export const store = configureStore({
    reducer: {
        taskSlices: counterSlices
    },
})

export default store;
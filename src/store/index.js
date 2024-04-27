import {configureStore} from "@reduxjs/toolkit"
import itemSlice from "./ItemSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import BagSlice from "./BagSlice";


const myntraStore = configureStore({
    reducer:{

        items: itemSlice.reducer,
        fetchStatus:fetchStatusSlice.reducer,
        bag:BagSlice.reducer
    }
})


export default myntraStore;
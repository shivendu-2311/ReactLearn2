import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IHotel{
    name: string;
    cuisines:string;
    featured_image:string;
    id:string;
}
const HotelsSlice = createSlice({
    name: "hotelsSlice",
    initialState: Array<IHotel>(),
    reducers:{
        setHotels(_state: IHotel[], payload: PayloadAction<IHotel[]>)
        {
            return payload.payload;
        }
    }
})
export const {setHotels} = HotelsSlice.actions;
export default HotelsSlice.reducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Iname
{
    name:string
}

const SetSearchTest=createSlice(
    {
        name:'kuch_bhi3',
        initialState:{name:''},
        reducers:{
            setName_(state:Iname,newName:PayloadAction<string>)
            {
                state.name=newName.payload;
            }
        }

    }
)

export const {setName_}=SetSearchTest.actions;

export default SetSearchTest.reducer;
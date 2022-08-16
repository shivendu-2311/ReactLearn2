import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//table schema
interface IName {
  name: string;
}

const NameSlice = createSlice({
  name: 'NameSlice',
  initialState: { name: '' },
  reducers: {
    setName(state: IName, newName: PayloadAction<string>) {
      state.name = newName.payload;
    },
  },
});

export const { setName } = NameSlice.actions;
export default NameSlice.reducer;
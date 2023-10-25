const { createSlice } = require("@reduxjs/toolkit");

const appConfigSlice = createSlice({
  name: "app configuration",
  initialState: {
    isMenuEnabled: true,
  },
  reducers: {
    flagMenu: (state) => {
      state.isMenuEnabled = !state.isMenuEnabled;
    },
    hideMenu:(state)=>{
      state.isMenuEnabled=false;
    }
  },
});

export default appConfigSlice.reducer;
export const { flagMenu,hideMenu } = appConfigSlice.actions;

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
  },
});

export default appConfigSlice.reducer;
export const { flagMenu } = appConfigSlice.actions;

import { configureStore } from "@reduxjs/toolkit";
import gallerySlice from "./reducers/GallerySlice.js";

const store = configureStore({
  reducer: {
    gallery: gallerySlice,
  },
});

export default store;
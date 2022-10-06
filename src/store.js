import { configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query';
import { profileApi } from './services/profile';
import userReducer from './features/userSlice';
import interReducer from './features/interviewSlice';
import candidateReducer from './features/candidateSlice';

// import cartReducer from './features/CartSlice';
// import userReducer from './features/useSlice';
// import authReducer from './features/authSlice';
// import adressReducer from './features/adressSlice';
export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [profileApi.reducerPath]: profileApi.reducer,
    //  products: productReducer,
    inter: interReducer,
    user: userReducer,
    candidate: candidateReducer
    //  auth: authReducer, adress:adressReducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(profileApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)
// store.dispatch(fetchProducts());
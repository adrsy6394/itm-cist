import { configureStore } from '@reduxjs/toolkit'
import scheduleReducer from '../features/schedule/scheduleSlice'
import speakerReducer from '../features/speakers/speakerSlice'
import committeeReducer from '../features/committees/committeeSlice'
import registrationReducer from '../features/registration/registrationSlice'

/**
 * Redux Store — CIST Conference Website (public-only)
 * Auth and content slices removed. All external links are in src/config/siteConfig.js
 */
export const store = configureStore({
  reducer: {
    schedule:     scheduleReducer,
    speaker:      speakerReducer,
    committee:    committeeReducer,
    registration: registrationReducer,
  },
})

/** @typedef {ReturnType<typeof store.getState>} RootState */
/** @typedef {typeof store.dispatch} AppDispatch */

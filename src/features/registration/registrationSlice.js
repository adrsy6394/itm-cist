import { createSlice } from '@reduxjs/toolkit'

/**
 * registrationSlice — Registration form links and fee categories
 * Admin can update form links from the admin panel
 */
const initialState = {
  formLinks: {
    faculty: import.meta.env.VITE_REGISTRATION_FORM_FACULTY || '',
    itmStudents: import.meta.env.VITE_REGISTRATION_FORM_ITM || '',
    external: import.meta.env.VITE_REGISTRATION_FORM_EXTERNAL || '',
  },
  categories: [
    // Populated via admin panel or static config
    // { id, label, fee, currency, description }
  ],
  isOpen: true, // Admin can toggle registration open/close
}

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    updateFormLinks(state, action) {
      state.formLinks = { ...state.formLinks, ...action.payload }
    },
    setCategories(state, action) {
      state.categories = action.payload
    },
    toggleRegistration(state) {
      state.isOpen = !state.isOpen
    },
  },
})

export const { updateFormLinks, setCategories, toggleRegistration } = registrationSlice.actions
export default registrationSlice.reducer

// Selectors
export const selectFormLinks = (state) => state.registration.formLinks
export const selectCategories = (state) => state.registration.categories
export const selectRegistrationOpen = (state) => state.registration.isOpen

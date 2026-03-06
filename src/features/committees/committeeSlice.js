import { createSlice } from '@reduxjs/toolkit'

/**
 * committeesSlice — Committee member data
 * Loaded from static JSON (data/committees.json)
 * Types: advisory | organizing | technical | convenors
 */
const initialState = {
  committees: {
    advisory: [],
    organizing: [],
    technical: [],
    convenors: [],
  },
  loading: false,
  error: null,
}

const committeeSlice = createSlice({
  name: 'committee',
  initialState,
  reducers: {
    setCommittee(state, action) {
      const { type, members } = action.payload
      if (type in state.committees) {
        state.committees[type] = members
      }
    },
    setAllCommittees(state, action) {
      state.committees = { ...state.committees, ...action.payload }
    },
    setLoading(state, action) {
      state.loading = action.payload
    },
    setError(state, action) {
      state.error = action.payload
    },
  },
})

export const { setCommittee, setAllCommittees, setLoading, setError } = committeeSlice.actions
export default committeeSlice.reducer

// Selectors
export const selectAdvisoryCommittee = (state) => state.committee.committees.advisory
export const selectOrganizingCommittee = (state) => state.committee.committees.organizing
export const selectTechnicalCommittee = (state) => state.committee.committees.technical
export const selectConvenors = (state) => state.committee.committees.convenors
export const selectCommitteesLoading = (state) => state.committee.loading

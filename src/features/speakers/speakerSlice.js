import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

/**
 * speakersSlice — Conference speakers listing
 * Data from static JSON or Google Sheet
 */

export const fetchSpeakers = createAsyncThunk(
  'speakers/fetchSpeakers',
  async (sourceUrl, { rejectWithValue }) => {
    try {
      const response = await fetch(sourceUrl)
      if (!response.ok) throw new Error('Failed to fetch speakers')
      return await response.json()
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const initialState = {
  speakers: [],
  loading: false,
  error: null,
}

const speakerSlice = createSlice({
  name: 'speaker',
  initialState,
  reducers: {
    setSpeakers(state, action) {
      state.speakers = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpeakers.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchSpeakers.fulfilled, (state, action) => {
        state.loading = false
        state.speakers = action.payload
      })
      .addCase(fetchSpeakers.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || 'Failed to load speakers'
      })
  },
})

export const { setSpeakers } = speakerSlice.actions
export default speakerSlice.reducer

// Selectors
export const selectSpeakers = (state) => state.speaker.speakers
export const selectSpeakersLoading = (state) => state.speaker.loading
export const selectSpeakersError = (state) => state.speaker.error

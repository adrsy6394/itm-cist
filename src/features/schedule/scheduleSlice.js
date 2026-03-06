import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

/**
 * scheduleSlice — Conference schedule data
 * Fetched from published Google Sheet CSV/JSON
 */

// Async thunk to fetch schedule from Google Sheet
export const fetchSchedule = createAsyncThunk(
  'schedule/fetchSchedule',
  async (sheetUrl, { rejectWithValue }) => {
    try {
      const response = await fetch(sheetUrl)
      if (!response.ok) throw new Error('Failed to fetch schedule')
      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const initialState = {
  sessions: [],
  loading: false,
  error: null,
  lastFetched: null,
}

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    setSchedule(state, action) {
      state.sessions = action.payload
      state.lastFetched = new Date().toISOString()
    },
    clearSchedule(state) {
      state.sessions = []
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSchedule.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchSchedule.fulfilled, (state, action) => {
        state.loading = false
        state.sessions = action.payload
        state.lastFetched = new Date().toISOString()
      })
      .addCase(fetchSchedule.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || 'Failed to load schedule'
      })
  },
})

export const { setSchedule, clearSchedule } = scheduleSlice.actions
export default scheduleSlice.reducer

// Selectors
export const selectSessions = (state) => state.schedule.sessions
export const selectScheduleLoading = (state) => state.schedule.loading
export const selectScheduleError = (state) => state.schedule.error

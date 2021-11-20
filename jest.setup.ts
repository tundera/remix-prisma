import 'universal-dotenv/register'
import '@testing-library/jest-dom'

// Manually mock certain modules across all tests
jest.mock('framer-motion')

// Fake timers using Jest
beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  // Running all pending timers and switching to real timers using Jest
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
})

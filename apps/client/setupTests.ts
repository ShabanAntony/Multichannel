import '@testing-library/jest-dom/extend-expect'
import fetchMock from 'jest-fetch-mock'

// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-empty-function
window.URL.createObjectURL = function () {}
// eslint-disable-next-line @typescript-eslint/no-empty-function
window.URL.revokeObjectURL = function () {}

fetchMock.enableMocks()

class IntersectionObserver {
  observe = jest.fn()
  disconnect = jest.fn()
  unobserve = jest.fn()
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
})

Object.defineProperty(global, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
})

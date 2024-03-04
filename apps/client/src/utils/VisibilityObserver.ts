import { useEffect, useMemo, useRef } from 'react'

import { createEvent, createStore } from 'effector'
import { useUnit } from 'effector-react'

export const setVisibilityMap =
  createEvent<Map<Element, boolean>>('set visibility map')
export const observeElement = createEvent<Element>('starts element observing')
export const unobserveElement = createEvent<Element>('stop element observing')
export const $visibility = createStore(new Map<Element, boolean>()).on(
  setVisibilityMap,
  (_, store) => store,
)

const targetsMap = new WeakSet<Element>()
const observer = new IntersectionObserver(
  (entries) => {
    // eslint-disable-next-line effector/no-getState
    const oldMap = $visibility.getState()
    const map = entries.reduce((result, entry) => {
      result.set(entry.target, entry.isIntersecting)

      return result
    }, new Map<Element, boolean>(oldMap))

    setVisibilityMap(map)
  },
  {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  },
)

observeElement.watch((element) => {
  // if (targetsMap.has(element)) {
  //   return
  // }
  // console.log(`>> add`, key)

  targetsMap.add(element)
  observer.observe(element)
})

unobserveElement.watch((element) => {
  targetsMap.delete(element)
  observer.unobserve(element)
})

export const useVisibilityObserver = () => {
  const containerRef = useRef(null)
  const visibility = useUnit($visibility)

  useEffect(() => {
    const element = containerRef.current!

    if (element) {
      observeElement(element)
    }

    return () => {
      if (element) {
        unobserveElement(element!)
      }
    }
  }, [])

  const isVisible = !!visibility.get(containerRef.current!)

  return useMemo(
    () => [containerRef, isVisible] as const,
    [containerRef, isVisible],
  )
}
